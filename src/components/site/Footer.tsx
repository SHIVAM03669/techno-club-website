"use client";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-8 grid gap-4 md:grid-cols-2 items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Techno Smart Campus Club. All rights reserved.
        </p>
        <p className="text-sm md:text-right text-muted-foreground">
          Built with Next.js, Tailwind, and shadcn/ui.
        </p>
      </div>
    </footer>
  );
}