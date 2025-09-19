"use client";

import { Card } from "@/components/ui/card";

const images = [
  "https://images.unsplash.com/photo-1517976487492-576ce9b77e0b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200&auto=format&fit=crop",
];

export default function MemoriesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Memories</h1>
      <p className="mt-2 text-muted-foreground">Snapshots from our events and projects.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <Card key={src + i} className="overflow-hidden">
            <img
              src={src}
              alt={`Club memory ${i + 1}`}
              className="h-56 w-full object-cover transition-transform hover:scale-[1.02]"
              loading="lazy"
            />
          </Card>
        ))}
      </div>
    </main>
  );
}