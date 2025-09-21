import { db } from '@/db';
import { user, articles } from '@/db/schema';
import { eq } from 'drizzle-orm';

async function main() {
    // Check if seed user exists, if not create it
    const existingUser = await db.select().from(user).where(eq(user.id, 'seed_user')).limit(1);
    let seedUserId = 'seed_user';
    
    if (existingUser.length === 0) {
        await db.insert(user).values({
            id: seedUserId,
            name: 'Seed Author',
            email: 'seed@example.com',
            emailVerified: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }

    const publishedArticles = [
        {
            title: 'Getting Started with Next.js',
            slug: 'getting-started-nextjs',
            content: `Next.js is a powerful React framework that enables developers to build fast, server-rendered applications with ease. It provides an excellent developer experience with features like hot code reloading, automatic code splitting, and built-in CSS support.

In this comprehensive guide, we'll walk through the fundamental concepts of Next.js, including file-based routing, API routes, and server-side rendering. You'll learn how to create dynamic pages, handle forms, and optimize your application for production.

Whether you're building a small blog or a large-scale enterprise application, Next.js offers the flexibility and performance you need to succeed in modern web development.`,
            status: 'published',
            authorId: seedUserId,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            title: 'Understanding React Hooks',
            slug: 'understanding-react-hooks',
            content: `React Hooks revolutionized the way we write React components by allowing us to use state and other React features in functional components. This paradigm shift has made functional components as powerful as class components.

We'll explore the most commonly used hooks including useState for managing component state, useEffect for side effects, and useContext for consuming context. Each hook serves a specific purpose and understanding when and how to use them is crucial for writing efficient React applications.

By mastering React Hooks, you'll be able to write cleaner, more maintainable, and reusable components that enhance the overall performance and readability of your React applications.`,
            status: 'published',
            authorId: seedUserId,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            title: 'Building Modern Web Applications',
            slug: 'building-modern-web-applications',
            content: `Modern web development has evolved significantly over the past decade, with new tools, frameworks, and approaches constantly emerging. Today's developers have access to powerful technologies that enable creating sophisticated web applications that rival native desktop applications.

This article covers essential concepts including progressive web apps, responsive design, performance optimization, and accessibility. We'll explore how to choose the right technology stack for your project and implement best practices for maintainable code architecture.

From initial project setup to deployment strategies, we'll provide a roadmap for building reliable, scalable, and user-friendly web applications that meet today's demanding requirements.`,
            status: 'published',
            authorId: seedUserId,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            title: 'TypeScript Best Practices',
            slug: 'typescript-best-practices',
            content: `TypeScript has become an essential tool for JavaScript developers, providing static type checking while maintaining the flexibility of JavaScript. Proper TypeScript usage can significantly reduce bugs and improve code maintainability in large codebases.

We'll explore best practices such as using strict mode, proper type definitions, interface segregation, and type guards. Understanding when to use interfaces versus types, implementing generics effectively, and working with utility types will help you write more robust applications.

Learn how to configure TypeScript for optimal developer experience, avoid common pitfalls, and integrate it seamlessly with popular frameworks like React and Node.js.`,
            status: 'published',
            authorId: seedUserId,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            title: 'Database Design Principles',
            slug: 'database-design-principles',
            content: `Effective database design is the foundation of any successful application. A well-designed database ensures data integrity, optimizes performance, and provides flexibility for future enhancements as your application grows.

We'll cover fundamental principles including normalization, proper indexing strategies, and relationship modeling. Understanding how to structure your data efficiently, create appropriate constraints, and maintain data integrity is crucial for building scalable applications.

Whether you're working with SQL or NoSQL databases, these principles will guide you in making informed decisions about your data architecture, from initial schema design to performance tuning in production environments.`,
            status: 'published',
            authorId: seedUserId,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
    ];

    const draftArticles = [
        {
            title: 'Work in Progress: Advanced Patterns',
            slug: 'work-in-progress-advanced-patterns',
            content: `Advanced design patterns in software development provide robust solutions to common problems. This draft explores complex patterns like dependency injection, observer pattern, and abstract factory pattern in modern JavaScript applications.

Understanding these patterns will elevate your programming skills and enable you to build more maintainable and scalable applications. We'll provide practical examples showing how these patterns solve real-world problems.`,
            status: 'draft',
            authorId: seedUserId,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            title: 'Draft: Future of Web Development',
            slug: 'draft-future-web-development',
            content: `The web development landscape is continuously evolving with new technologies and approaches. This article explores emerging trends including WebAssembly, edge computing, and AI-assisted development that are shaping the future of how we build web applications.

Understanding these trends helps developers prepare for the next generation of web technologies and build future-proof applications.`,
            status: 'draft',
            authorId: seedUserId,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
    ];

    await db.insert(articles).values([...publishedArticles, ...draftArticles]);
    
    console.log('✅ Articles seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});