"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Lightbulb, Users, Target } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: Leaf, title: "Sustainability First", desc: "We champion practices and technologies that reduce environmental impact across campus." },
    { icon: Lightbulb, title: "Innovation Drive", desc: "We explore bold ideas and rapid prototyping to move from concept to impact." },
    { icon: Users, title: "Collaborative Spirit", desc: "We connect students, faculty, and partners to co-create better solutions." },
    { icon: Target, title: "Impact Focused", desc: "We measure what matters and ship projects that deliver real outcomes." },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">About Us</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">
        Techno Smart Campus Club is a student-led community dedicated to building a greener, smarter campus through
        technology, design, and collaboration.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            To catalyze sustainable innovation on campus by empowering members to research, prototype, and deploy
            solutions that reduce waste, conserve energy, and improve quality of life for everyone.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Started in 2021 by a small group of engineers and designers, the club has grown into a cross-disciplinary
            team that runs workshops, hackathons, and real-world pilots in partnership with campus departments.
          </CardContent>
        </Card>
      </div>

      <h2 className="mt-10 text-2xl font-semibold tracking-tight">Our Values</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <Card key={v.title}>
            <CardHeader className="flex flex-row items-center gap-3">
              <v.icon className="h-5 w-5" />
              <CardTitle className="text-base">{v.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{v.desc}</CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}