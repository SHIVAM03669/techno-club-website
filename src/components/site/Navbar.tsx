"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { authClient, useSession } from "@/lib/auth-client";

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/members", label: "Members" },
  { href: "/events", label: "Events" },
  { href: "/articles", label: "Articles" },
  { href: "/memories", label: "Memories" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const handleLogout = async () => {
    try {
      await authClient.signOut();
    } catch (e) {
      // noop
    } finally {
      try {
        localStorage.removeItem("bearer_token");
        localStorage.removeItem("member_pin_ok");
      } catch {}
      window.location.href = "/";
    }
  };

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl rounded-full bg-white/80 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.3),0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]">
      <div className="mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="text-black font-bold text-xl tracking-tight font-sans">
          Techno Club
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.slice(0, 4).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-black" : "text-gray-700 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-4 ml-4">
            <Link 
              href="/about" 
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="bg-[#81ff00] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#a6d42b] transition-colors"

            >
              Contact
            </Link>
          </div>
          {/* Auth actions - Only show manage for logged in users */}
          {session?.user && (
            <div className="ml-2 flex items-center gap-2">
              <Link href="/articles/manage">
                <Button size="sm" variant="outline">Manage Articles</Button>
              </Link>
              <Button size="sm" variant="ghost" onClick={handleLogout}>Logout</Button>
            </div>
          )}
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Open menu"
                className="h-10 w-10 rounded-full bg-white/50 hover:bg-white/70"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0 bg-white/95 backdrop-blur-lg">
              <div className="h-full flex flex-col pt-16 px-6 gap-1">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-lg px-4 py-3 text-base transition-colors ${
                        active ? "bg-gray-100 text-black" : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                {/* Auth actions - Only show manage for logged in users */}
                {session?.user && (
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    <Link 
                      href="/articles/manage" 
                      className="block rounded-lg px-4 py-3 text-base hover:bg-gray-50 transition-colors"
                    >
                      Manage Articles
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left block rounded-lg px-4 py-3 text-base hover:bg-gray-50 transition-colors"
                    >
                      Logout
                    </button>
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