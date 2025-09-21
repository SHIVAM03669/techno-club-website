"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registered = params.get("registered") === "true";
  const redirect = params.get("redirect") || "/articles/manage";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await authClient.signIn.email({
      email,
      password,
      rememberMe,
      callbackURL: redirect,
    });

    setLoading(false);

    if (error?.code) {
      setError("Invalid email or password. Please make sure you have registered.");
      return;
    }

    router.push(redirect);
  };

  return (
    <main className="mx-auto max-w-md px-4 pt-32 pb-12">
      <h1 className="text-3xl font-bold tracking-tight text-white">Login</h1>
      <p className="mt-2 text-sm text-gray-400">
        {registered ? "Account created! Please log in." : "Welcome back. Enter your credentials."}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 p-6 rounded-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur">
        <div>
          <label className="block text-sm font-medium text-gray-300">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#81ff00]"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#81ff00]"
            autoComplete="off"
            placeholder="••••••••"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            id="remember"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 rounded border-white/20 bg-white/10"
          />
          <label htmlFor="remember" className="text-sm text-gray-400">
            Remember me
          </label>
        </div>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
        <Button type="submit" disabled={loading} className="w-full bg-[#81ff00] text-black hover:bg-[#a6d42b]">
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <p className="mt-4 text-sm text-gray-400">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline text-[#81ff00]">Create one</Link>
      </p>
    </main>
  );
}