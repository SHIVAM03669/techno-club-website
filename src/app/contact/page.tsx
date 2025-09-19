"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // For demo purposes only
    console.log("Contact form submitted:", data);
    setStatus("Thanks! We'll get back to you soon.");
    form.reset();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">
        Have a question, idea, or proposal? Reach out and we’ll respond promptly.
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">Name</label>
          <Input id="name" name="name" placeholder="Your full name" required />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
          <Textarea id="message" name="message" placeholder="How can we help?" rows={5} required />
        </div>
        <div className="flex items-center gap-3">
          <Button type="submit">Send Message</Button>
          {status && <p className="text-sm text-muted-foreground">{status}</p>}
        </div>
      </form>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="text-sm text-muted-foreground">
          <p><span className="font-medium text-foreground">Email:</span> hello@technoclub.campus</p>
          <p><span className="font-medium text-foreground">Location:</span> Innovation Lab, Building E</p>
          <p><span className="font-medium text-foreground">Hours:</span> Wed–Fri, 3–6pm</p>
        </div>
        <iframe
          title="Campus Map"
          className="h-56 w-full rounded-md border"
          src="https://www.openstreetmap.org/export/embed.html?bbox=90.384%2C23.73%2C90.41%2C23.75&layer=mapnik"
        />
      </div>
    </main>
  );
}