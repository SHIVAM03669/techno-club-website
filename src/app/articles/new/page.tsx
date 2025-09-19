"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function NewArticlePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const token = localStorage.getItem("bearer_token");
      const res = await fetch("/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content, status }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to create article");
      }

      // go to manage page
      router.push("/articles/manage");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">New Article</h1>
        <Link href="/articles/manage" className="text-sm underline">Back to Manage</Link>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Write your article</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={12}
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Status:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStatus("draft")}
                  className={`rounded-md px-3 py-1 text-sm border ${status === "draft" ? "bg-secondary" : "bg-background"}`}
                >
                  Draft
                </button>
                <button
                  type="button"
                  onClick={() => setStatus("published")}
                  className={`rounded-md px-3 py-1 text-sm border ${status === "published" ? "bg-secondary" : "bg-background"}`}
                >
                  Published
                </button>
                <Badge variant="secondary">{status}</Badge>
              </div>
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Create Article"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}