"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Article {
  id: number;
  title: string;
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}

export default function ManageArticlesPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [items, setItems] = useState<Article[]>([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | "draft" | "published">("all");

  const filtered = useMemo(() => {
    return items.filter((a) => {
      const matchesQ = a.title.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === "all" ? true : a.status === status;
      return matchesQ && matchesStatus;
    });
  }, [items, query, status]);

  const fetchMine = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("bearer_token");
      const url = new URL(window.location.origin + "/api/articles/mine");
      const res = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        if (res.status === 401) router.push("/login?redirect=/articles/manage");
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to load articles");
      }
      const data: Article[] = await res.json();
      setItems(data);
    } catch (e: any) {
      setError(e.message || "Failed to load");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMine();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteArticle = async (id: number) => {
    try {
      const token = localStorage.getItem("bearer_token");
      const res = await fetch(`/api/articles/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Delete failed");
      }
      setItems((prev) => prev.filter((a) => a.id !== id));
    } catch (e) {
      setError((e as any).message || "Delete failed");
    }
  };

  const togglePublish = async (a: Article) => {
    try {
      const token = localStorage.getItem("bearer_token");
      const res = await fetch(`/api/articles/${a.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: a.status === "draft" ? "published" : "draft" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Update failed");
      }
      const updated: Article = await res.json();
      setItems((prev) => prev.map((x) => (x.id === updated.id ? updated : x)));
    } catch (e) {
      setError((e as any).message || "Update failed");
    }
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Manage Articles</h1>
        <div className="flex gap-2">
          <Link href="/articles/new">
            <Button>New Article</Button>
          </Link>
          <Link href="/articles">
            <Button variant="outline">Public List</Button>
          </Link>
        </div>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Your articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <input
              placeholder="Search title..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full sm:w-64 rounded-md border bg-background px-3 py-2 text-sm"
            />
            <div className="flex items-center gap-2">
              <span className="text-sm">Status:</span>
              <select
                className="rounded-md border bg-background px-2 py-1 text-sm"
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
              >
                <option value="all">All</option>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>

          {loading ? (
            <p className="mt-6 text-sm text-muted-foreground">Loading...</p>
          ) : error ? (
            <p className="mt-6 text-sm text-red-600">{error}</p>
          ) : filtered.length === 0 ? (
            <p className="mt-6 text-sm text-muted-foreground">No articles yet.</p>
          ) : (
            <div className="mt-6 grid gap-4">
              {filtered.map((a) => (
                <div key={a.id} className="flex items-start justify-between gap-4 rounded-md border p-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{a.title}</h3>
                      <Badge variant={a.status === "published" ? "default" : "secondary"}>{a.status}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Updated {new Date(a.updatedAt).toLocaleString()}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => togglePublish(a)}>
                      {a.status === "draft" ? "Publish" : "Unpublish"}
                    </Button>
                    <Link href={`/articles/${a.id}/edit`}>
                      <Button variant="outline">Edit</Button>
                    </Link>
                    <Button variant="destructive" onClick={() => deleteArticle(a.id)}>Delete</Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}