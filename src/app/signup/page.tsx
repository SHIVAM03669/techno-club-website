"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    const { error } = await authClient.signUp.email({
      email,
      name,
      password,
    });
    setLoading(false);

    if (error?.code) {
      setError("Registration failed. Try a different email.");
      return;
    }

    router.push("/login?registered=true");
  };

  return (
    <main className="mx-auto max-w-md px-4 pt-32 pb-12">
      <h1 className="text-3xl font-bold tracking-tight text-white">Create account</h1>
      <p className="mt-2 text-sm text-gray-400">Join the club to write and manage your articles.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 p-6 rounded-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur">
        <div>
          <label className="block text-sm font-medium text-gray-300">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#81ff00]"
            autoComplete="name"
            placeholder="Your name"
          />
        </div>
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
        <div>
          <label className="block text-sm font-medium text-gray-300">Confirm Password</label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#81ff00]"
            autoComplete="off"
            placeholder="••••••••"
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button type="submit" disabled={loading} className="w-full bg-[#81ff00] text-black hover:bg-[#a6d42b]">
          {loading ? "Creating account..." : "Create account"}
        </Button>
      </form>

      <p className="mt-4 text-sm text-gray-400">
        Already have an account? <Link href="/login" className="underline text-[#81ff00]">Log in</Link>
      </p>
    </main>
  );
}
