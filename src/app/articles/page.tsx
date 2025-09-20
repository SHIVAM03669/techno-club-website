"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";

interface ArticleItem {
  id: number;
  title: string;
  excerpt?: string;
  content: string;
  date?: string;
  tag?: string;
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
  slug: string;
}

export default function ArticlesPage() {
  const { data: session, isPending: isAuthPending } = useSession();
  const [items, setItems] = useState<ArticleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/articles");
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || "Failed to load articles");
        }
        const data: ArticleItem[] = await res.json();
        setItems(data);
      } catch (e: any) {
        setError(e.message || "Failed to load articles");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Articles</h1>
          <p className="mt-2 text-muted-foreground">Stories, guides, and research from the club.</p>
        </div>
        
        {!isAuthPending && (
          <div className="flex flex-col sm:flex-row gap-4">
            {session?.user ? (
              <Link href="/articles/manage">
                <Button>Write article</Button>
              </Link>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <p className="text-sm text-muted-foreground self-center">Sign in to create articles</p>
                <div className="flex gap-2">
                  <Link href="/login" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link href="/register" className="w-full sm:w-auto">
                    <Button className="w-full">Sign up</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {loading ? (
        <p className="mt-8 text-sm text-muted-foreground">Loading...</p>
      ) : error ? (
        <p className="mt-8 text-sm text-red-600">{error}</p>
      ) : items.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">No articles yet.</p>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((a) => (
            <Card key={a.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-lg leading-tight">{a.title}</CardTitle>
                  <Badge variant="secondary">{a.status}</Badge>
                </div>
                <CardDescription>
                  {new Date(a.createdAt).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {a.content.length > 160 ? a.content.slice(0, 160) + "…" : a.content}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}