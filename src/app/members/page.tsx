"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const members = [
  { name: "Aisha Khan", role: "President", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
  { name: "Ravi Patel", role: "Vice President", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop" },
  { name: "Maya Chen", role: "Research Lead", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop" },
  { name: "Diego Morales", role: "Events Lead", img: "https://images.unsplash.com/photo-1542168796-9d99f2c2d4cc?q=80&w=800&auto=format&fit=crop" },
];

export default function MembersPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Members</h1>
      <p className="mt-2 text-muted-foreground">Meet the team driving our mission forward.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m) => (
          <Card key={m.name}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={m.img} alt={m.name} />
                <AvatarFallback>{m.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base">{m.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Passionate about sustainability and innovation.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}