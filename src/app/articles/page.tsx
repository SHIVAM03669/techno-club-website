"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

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
  const [pin, setPin] = useState("");
  const [hasPin, setHasPin] = useState(false);
  const [pinError, setPinError] = useState<string | null>(null);

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasPin(localStorage.getItem('member_pin_ok') === '1');
    }
  }, []);

  const verifyPin = () => {
    if (pin === "1234") {
      if (typeof window !== 'undefined') {
        localStorage.setItem('member_pin_ok', '1');
      }
      setHasPin(true);
      setPinError(null);
    } else {
      setPinError("Incorrect PIN. Please try again.");
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 pt-32 pb-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Articles</h1>
          <p className="mt-2 text-gray-400">Stories, guides, and research from the club.</p>
        </div>
        
        {!isAuthPending && session?.user && (
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/articles/manage">
              <Button>Write article</Button>
            </Link>
          </div>
        )}
      </div>

      {loading ? (
        <p className="mt-8 text-sm text-gray-400">Loading...</p>
      ) : error ? (
        <p className="mt-8 text-sm text-red-600">{error}</p>
      ) : items.length === 0 ? (
        <p className="mt-8 text-sm text-gray-400">No articles yet.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((a) => (
            <Link key={a.id} href={`/articles/${a.id}`} className="group block">
              <Card
                className="flex flex-col rounded-xl bg-white/5 border border-white/10 hover:border-[#81ff00]/50 hover:-translate-y-0.5 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.35)] cursor-pointer"
                aria-label={`Read article: ${a.title}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg leading-tight text-white group-hover:text-[#81ff00] transition-colors">{a.title}</CardTitle>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
                        a.status === 'published'
                          ? 'bg-[#81ff00] text-black'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                      }`}
                    >
                      {a.status}
                    </span>
                  </div>
                  <CardDescription className="text-gray-400">
                    {new Date(a.createdAt).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-gray-300">
                  {a.content.length > 160 ? a.content.slice(0, 160) + "…" : a.content}
                  <span className="mt-3 block text-[#81ff00] text-sm group-hover:underline">Read more →</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {/* Members-only PIN gate at the end of the page */}
      {!isAuthPending && !session?.user && (
        <section className="mt-16">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 max-w-lg">
            {!hasPin ? (
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Member Access</h2>
                <p className="text-sm text-gray-300 mb-4">
                  <span className="inline-block rounded-full bg-[#81ff00] text-black px-2 py-0.5 text-xs font-semibold mr-2">Members only</span>
                  Enter the 4-digit club PIN to proceed to member login.
                </p>
                <div className="flex items-center gap-3">
                  <InputOTP maxLength={4} value={pin} onChange={setPin} aria-label="Member PIN">
                    <InputOTPGroup>
                      <InputOTPSlot index={0} className="bg-white/5 text-white border-white/10" />
                      <InputOTPSlot index={1} className="bg-white/5 text-white border-white/10" />
                      <InputOTPSlot index={2} className="bg-white/5 text-white border-white/10" />
                      <InputOTPSlot index={3} className="bg-white/5 text-white border-white/10" />
                    </InputOTPGroup>
                  </InputOTP>
                  <Button onClick={verifyPin} disabled={pin.length !== 4} className="bg-[#81ff00] text-black hover:bg-[#a6d42b]">Verify</Button>
                </div>
                {pinError && <p className="mt-2 text-xs text-red-500">{pinError}</p>}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-[#81ff00] text-black px-2 py-0.5 text-xs font-semibold">PIN verified</span>
                <Link href="/login">
                  <Button className="bg-[#81ff00] text-black hover:bg-[#a6d42b]">Login</Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}