"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { authClient, useSession } from "@/lib/auth-client";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/members", label: "Members" },
  { href: "/events", label: "Events" },
  { href: "/articles", label: "Articles" },
  { href: "/memories", label: "Memories" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending, refetch } = useSession();

  const handleSignOut = async () => {
    const token = typeof window !== "undefined" ? localStorage.getItem("bearer_token") : "";
    const { error } = await authClient.signOut({
      fetchOptions: {
        headers: { Authorization: `Bearer ${token}` },
      },
    });
    if (!error?.code) {
      localStorage.removeItem("bearer_token");
      refetch();
      router.push("/");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="font-semibold text-lg md:text-xl tracking-tight">
          Techno Club
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          {/* Auth actions */}
          {!isPending && (
            <div className="ml-2 flex items-center gap-2">
              {session?.user ? (
                <>
                  <Link href="/articles/manage">
                    <Button size="sm" variant="outline">Manage</Button>
                  </Link>
                  <Button size="sm" onClick={handleSignOut}>Sign out</Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button size="sm">Login</Button>
                  </Link>
                  <Link href="/register">
                    <Button size="sm" variant="outline">Register</Button>
                  </Link>
                </>
              )}
            </div>
          )}
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-md px-3 py-2 text-base transition-colors ${
                        active ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                {/* Auth actions */}
                {!isPending && (
                  <div className="mt-4 border-t pt-4">
                    {session?.user ? (
                      <div className="flex flex-col gap-2">
                        <Link href="/articles/manage" className="rounded-md px-3 py-2 text-base hover:underline">
                          Manage Articles
                        </Link>
                        <button onClick={handleSignOut} className="rounded-md px-3 py-2 text-left text-base text-red-600 hover:underline">
                          Sign out
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <Link href="/login" className="rounded-md px-3 py-2 text-base hover:underline">
                          Login
                        </Link>
                        <Link href="/register" className="rounded-md px-3 py-2 text-base hover:underline">
                          Register
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navbar;