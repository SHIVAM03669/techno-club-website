import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { articles, user } from '@/db/schema';
import { eq, like, and, or, desc, asc, sql } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/auth';

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

async function generateUniqueSlug(baseSlug: string): Promise<string> {
  let slug = baseSlug;
  let counter = 0;
  
  while (true) {
    const existing = await db
      .select({ id: articles.id })
      .from(articles)
      .where(eq(articles.slug, slug))
      .limit(1);
    
    if (existing.length === 0) {
      return slug;
    }
    
    counter++;
    slug = `${baseSlug}-${counter}`;
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');
    const author = searchParams.get('author');
    const status = searchParams.get('status');
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    
    const user = await getCurrentUser(request);
    
    let conditions: any[] = [];
    
    if (user) {
      // Authenticated users can see all articles. Apply optional filters.
      if (author === 'me') {
        conditions.push(eq(articles.authorId, user.id));
      }
      if (status === 'draft') {
        conditions.push(eq(articles.status, 'draft'));
      } else if (status === 'published') {
        conditions.push(eq(articles.status, 'published'));
      }
    } else {
      if (author === 'me') {
        return NextResponse.json({ error: 'Authentication required', code: 'AUTH_REQUIRED' }, { status: 401 });
      }
      if (status === 'draft') {
        return NextResponse.json({ error: 'Authentication required', code: 'AUTH_REQUIRED' }, { status: 401 });
      }
      conditions.push(eq(articles.status, 'published'));
    }
    
    if (q) {
      conditions.push(like(articles.title, `%${q}%`));
    }
    
    let query = db
      .select({
        id: articles.id,
        title: articles.title,
        slug: articles.slug,
        content: articles.content,
        status: articles.status,
        authorId: articles.authorId,
        createdAt: articles.createdAt,
        updatedAt: articles.updatedAt,
      })
      .from(articles)
      .orderBy(desc(articles.createdAt))
      .limit(limit)
      .offset(offset);
    
    if (conditions.length > 0) {
      if (conditions.length === 1) {
        query = query.where(conditions[0]) as any;
      } else if (conditions.length === 2) {
        query = query.where(and(conditions[0], conditions[1])) as any;
      } else {
        query = query.where(and(...conditions)) as any;
      }
    }
    
    const results = await query;
    
    return NextResponse.json(results);
  } catch (error) {
    console.error('GET /api/articles error:', error);
    return NextResponse.json({ error: 'Internal server error', message: String(error) }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Authentication required', code: 'AUTH_REQUIRED' }, { status: 401 });
    }
    
    const body = await request.json();
    const { title, content, status = 'draft' } = body;
    
    if ('authorId' in body || 'author_id' in body) {
      return NextResponse.json({ 
        error: 'Author ID cannot be provided in request body',
        code: 'AUTHOR_ID_NOT_ALLOWED' 
      }, { status: 400 });
    }
    
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return NextResponse.json({ 
        error: 'Title is required and must be non-empty',
        code: 'INVALID_TITLE' 
      }, { status: 400 });
    }
    
    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return NextResponse.json({ 
        error: 'Content is required and must be non-empty',
        code: 'INVALID_CONTENT' 
      }, { status: 400 });
    }
    
    if (status !== 'draft' && status !== 'published') {
      return NextResponse.json({ 
        error: 'Status must be either "draft" or "published"',
        code: 'INVALID_STATUS' 
      }, { status: 400 });
    }
    
    const trimmedTitle = title.trim();
    const baseSlug = createSlug(trimmedTitle);
    const uniqueSlug = await generateUniqueSlug(baseSlug);
    
    const now = new Date().toISOString();
    const newArticle = await db
      .insert(articles)
      .values({
        title: trimmedTitle,
        slug: uniqueSlug,
        content: content.trim(),
        status,
        authorId: user.id,
        createdAt: now,
        updatedAt: now,
      })
      .returning();
    
    return NextResponse.json(newArticle[0], { status: 201 });
  } catch (error) {
    console.error('POST /api/articles error:', error);
    return NextResponse.json({ error: 'Internal server error', message: String(error) }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Authentication required', code: 'AUTH_REQUIRED' }, { status: 401 });
    }
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: 'Valid ID is required',
        code: 'INVALID_ID' 
      }, { status: 400 });
    }
    
    const body = await request.json();
    const { title, content, status } = body;
    
    if ('authorId' in body || 'author_id' in body) {
      return NextResponse.json({ 
        error: 'Author ID cannot be provided in request body',
        code: 'AUTHOR_ID_NOT_ALLOWED' 
      }, { status: 400 });
    }
    
    const updates: any = {};
    let hasUpdates = false;
    
    if (title !== undefined) {
      if (typeof title !== 'string' || title.trim().length === 0) {
        return NextResponse.json({ 
          error: 'Title must be non-empty',
          code: 'INVALID_TITLE' 
        }, { status: 400 });
      }
      updates.title = title.trim();
      hasUpdates = true;
    }
    
    if (content !== undefined) {
      if (typeof content !== 'string' || content.trim().length === 0) {
        return NextResponse.json({ 
          error: 'Content must be non-empty',
          code: 'INVALID_CONTENT' 
        }, { status: 400 });
      }
      updates.content = content.trim();
      hasUpdates = true;
    }
    
    if (status !== undefined) {
      if (status !== 'draft' && status !== 'published') {
        return NextResponse.json({ 
          error: 'Status must be either "draft" or "published"',
          code: 'INVALID_STATUS' 
        }, { status: 400 });
      }
      updates.status = status;
      hasUpdates = true;
    }
    
    if (!hasUpdates) {
      return NextResponse.json({ 
        error: 'No valid fields to update',
        code: 'NO_UPDATES' 
      }, { status: 400 });
    }
    
    updates.updatedAt = new Date().toISOString();
    
    const updated = await db
      .update(articles)
      .set(updates)
      .where(and(eq(articles.id, parseInt(id)), eq(articles.authorId, user.id)))
      .returning();
    
    if (updated.length === 0) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    
    return NextResponse.json(updated[0]);
  } catch (error) {
    console.error('PUT /api/articles error:', error);
    return NextResponse.json({ error: 'Internal server error', message: String(error) }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Authentication required', code: 'AUTH_REQUIRED' }, { status: 401 });
    }
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: 'Valid ID is required',
        code: 'INVALID_ID' 
      }, { status: 400 });
    }
    
    const deleted = await db
      .delete(articles)
      .where(and(eq(articles.id, parseInt(id)), eq(articles.authorId, user.id)))
      .returning();
    
    if (deleted.length === 0) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    
    return NextResponse.json({ 
      message: 'Article deleted successfully',
      article: deleted[0]
    });
  } catch (error) {
    console.error('DELETE /api/articles error:', error);
    return NextResponse.json({ error: 'Internal server error', message: String(error) }, { status: 500 });
  }
}