"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ArticleDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const id = params?.id;

  const [article, setArticle] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/articles/${id}`);
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || `Failed to fetch article (${res.status})`);
        }
        const data = await res.json();
        setArticle(data);
      } catch (e: any) {
        setError(e.message || "Failed to fetch article");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  return (
    <main className="mx-auto max-w-3xl px-4 pt-32 pb-12">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/articles" className="text-sm text-[#81ff00] underline">← Back to Articles</Link>
      </div>

      {loading ? (
        <p className="text-sm text-gray-400">Loading...</p>
      ) : error ? (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      ) : !article ? (
        <p className="text-sm text-gray-400">Article not found.</p>
      ) : (
        <article className="rounded-xl bg-white/5 border border-white/10 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
          <h1 className="text-3xl font-bold text-white">{article.title}</h1>
          <p className="mt-2 text-sm text-gray-400">
            {new Date(article.createdAt).toLocaleDateString()} · <span className="uppercase tracking-wide text-xs ml-1 px-2 py-0.5 rounded-full border border-white/10 bg-white/10">{article.status}</span>
          </p>
          <div className="mt-6 whitespace-pre-wrap text-gray-200 leading-7">
            {article.content}
          </div>
        </article>
      )}
    </main>
  );
}
