"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    title: "Green Hackathon",
    date: "Oct 12, 2025",
    location: "Innovation Lab",
    description: "A 24-hour sprint to prototype sustainability-focused solutions.",
    status: "Upcoming",
  },
  {
    title: "Solar IoT Workshop",
    date: "Sep 28, 2025",
    location: "Room E-204",
    description: "Hands-on session on building solar-powered sensors and dashboards.",
    status: "Registration Open",
  },
];

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Events</h1>
      <p className="mt-2 text-muted-foreground">Join our activities and make an impact.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {events.map((e) => (
          <Card key={e.title}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{e.title}</CardTitle>
                <Badge variant="secondary">{e.status}</Badge>
              </div>
              <CardDescription>
                {e.date} • {e.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{e.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}