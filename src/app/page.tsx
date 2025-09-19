"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Lightbulb, Users, Target, Calendar, Newspaper, Image as ImageIcon, Mail } from "lucide-react";

export default function HomePage() {
  const values = [
    { icon: Leaf, title: "Sustainability First", desc: "Design choices that respect our planet." },
    { icon: Lightbulb, title: "Innovation Drive", desc: "From idea to prototype to pilot—fast." },
    { icon: Users, title: "Collaborative Spirit", desc: "We build together across disciplines." },
    { icon: Target, title: "Impact Focused", desc: "Measure outcomes and ship what matters." },
  ];

  const quickLinks = [
    { href: "/events", label: "Upcoming Events", icon: Calendar },
    { href: "/articles", label: "Read Articles", icon: Newspaper },
    { href: "/memories", label: "See Memories", icon: ImageIcon },
    { href: "/contact", label: "Contact Us", icon: Mail },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary to-background" />
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Techno Club</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">
              Techno Smart Campus Club
            </h1>
            <p className="mt-4 text-muted-foreground max-w-prose">
              We are a student-led community advancing sustainability through technology, research, and collaboration.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/events">Explore Events</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Join / Contact</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full overflow-hidden rounded-lg border">
              <img
                src="https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1600&auto=format&fit=crop"
                alt="Students collaborating on a sustainable tech project"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our Core Values</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <Card key={v.title}>
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <v.icon className="h-5 w-5" />
                  <div>
                    <p className="font-medium">{v.title}</p>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((q) => (
            <Link key={q.href} href={q.href} className="group">
              <Card className="h-full transition-colors hover:bg-secondary">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <q.icon className="h-5 w-5" />
                    <p className="font-medium group-hover:underline">{q.label}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}