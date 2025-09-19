import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { articles } from '@/db/schema';
import { eq, like, and, desc } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const searchQuery = searchParams.get('q');
    const statusFilter = searchParams.get('status');

    if (statusFilter && !['draft', 'published'].includes(statusFilter)) {
      return NextResponse.json({ 
        error: 'Invalid status filter. Must be "draft" or "published"',
        code: 'INVALID_STATUS'
      }, { status: 400 });
    }

    let query = db.select()
      .from(articles)
      .where(eq(articles.authorId, user.id))
      .orderBy(desc(articles.createdAt))
      .limit(limit)
      .offset(offset);

    if (searchQuery) {
      query = db.select()
        .from(articles)
        .where(
          and(
            eq(articles.authorId, user.id),
            like(articles.title, `%${searchQuery}%`)
          )
        )
        .orderBy(desc(articles.createdAt))
        .limit(limit)
        .offset(offset);
    }

    if (statusFilter) {
      const conditions = [eq(articles.authorId, user.id), eq(articles.status, statusFilter)];
      if (searchQuery) {
        conditions.push(like(articles.title, `%${searchQuery}%`));
      }
      
      query = db.select()
        .from(articles)
        .where(and(...conditions))
        .orderBy(desc(articles.createdAt))
        .limit(limit)
        .offset(offset);
    }

    const userArticles = await query;

    return NextResponse.json(userArticles);
  } catch (error) {
    console.error('GET /api/articles/mine error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      code: 'INTERNAL_ERROR'
    }, { status: 500 });
  }
}