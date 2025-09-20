"use client";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
        <p className="text-xs text-muted-foreground">
          {new Date().getFullYear()} Techno Smart Campus Club. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with Next.js, Tailwind, and shadcn/ui.
        </p>
      </div>
    </footer>
  );
}