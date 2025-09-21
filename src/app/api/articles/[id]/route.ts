import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { articles } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/auth';

// Generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

// Helper: parse ID safely
function parseId(id: string): number | null {
  const parsed = parseInt(id, 10);
  return isNaN(parsed) ? null : parsed;
}

/* -------------------------------------------------------------------------- */
/*                                 GET Article                                */
/* -------------------------------------------------------------------------- */
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idParam } = await context.params;
    const id = parseId(idParam);
    if (id === null) {
      return NextResponse.json(
        { error: 'Valid article ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const article = await db
      .select()
      .from(articles)
      .where(eq(articles.id, id))
      .limit(1);

    if (article.length === 0) {
      return NextResponse.json(
        { error: 'Article not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const articleData = article[0];

    // If article is published, allow public view
    if (articleData.status === 'published') {
      return NextResponse.json(articleData, { status: 200 });
    }

    // Draft → requires auth
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json(
        {
          error: 'Authentication required to view draft article',
          code: 'AUTH_REQUIRED',
        },
        { status: 401 }
      );
    }

    return NextResponse.json(articleData, { status: 200 });
  } catch (error) {
    console.error('GET article error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/* -------------------------------------------------------------------------- */
/*                                UPDATE Article                              */
/* -------------------------------------------------------------------------- */
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required', code: 'AUTH_REQUIRED' },
        { status: 401 }
      );
    }

    const { id: idParam } = await context.params;
    const id = parseId(idParam);
    if (id === null) {
      return NextResponse.json(
        { error: 'Valid article ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const body = await request.json();

    // Reject if user tries to pass authorId
    if ('authorId' in body) {
      return NextResponse.json(
        {
          error: 'Author ID cannot be provided in request body',
          code: 'AUTHOR_ID_NOT_ALLOWED',
        },
        { status: 400 }
      );
    }

    let updates: any = {};

    // Title
    if ('title' in body) {
      if (typeof body.title !== 'string' || body.title.trim().length === 0) {
        return NextResponse.json(
          { error: 'Title must be a non-empty string', code: 'INVALID_TITLE' },
          { status: 400 }
        );
      }
      updates.title = body.title.trim();
      updates.slug = generateSlug(body.title.trim());
    }

    // Content
    if ('content' in body) {
      if (typeof body.content !== 'string' || body.content.trim().length === 0) {
        return NextResponse.json(
          {
            error: 'Content must be a non-empty string',
            code: 'INVALID_CONTENT',
          },
          { status: 400 }
        );
      }
      updates.content = body.content.trim();
    }

    // Status
    if ('status' in body) {
      if (!['draft', 'published'].includes(body.status)) {
        return NextResponse.json(
          {
            error: 'Status must be either "draft" or "published"',
            code: 'INVALID_STATUS',
          },
          { status: 400 }
        );
      }
      updates.status = body.status;
    }

    // If nothing valid provided
    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: 'No valid fields provided for update', code: 'NO_UPDATES' },
        { status: 400 }
      );
    }

    // Always update updatedAt
    updates.updatedAt = new Date().toISOString();

    const updated = await db
      .update(articles)
      .set(updates)
      .where(eq(articles.id, id))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json(
        {
          error: 'Article not found or permission denied',
          code: 'NOT_FOUND_OR_FORBIDDEN',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(updated[0], { status: 200 });
  } catch (error) {
    console.error('PUT article error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/* -------------------------------------------------------------------------- */
/*                                DELETE Article                              */
/* -------------------------------------------------------------------------- */
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required', code: 'AUTH_REQUIRED' },
        { status: 401 }
      );
    }

    const { id: idParam } = await context.params;
    const id = parseId(idParam);
    if (id === null) {
      return NextResponse.json(
        { error: 'Valid article ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const deleted = await db
      .delete(articles)
      .where(eq(articles.id, id))
      .returning();

    if (deleted.length === 0) {
      return NextResponse.json(
        {
          error: 'Article not found or permission denied',
          code: 'NOT_FOUND_OR_FORBIDDEN',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Article deleted successfully',
        deleted: deleted[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE article error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
