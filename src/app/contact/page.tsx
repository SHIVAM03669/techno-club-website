"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Using OpenStreetMap embed for a lightweight, no-API-key map with a pinned marker.

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
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Contact</h1>
      <p className="mt-2 text-gray-400 max-w-2xl">
        Have a question, idea, or proposal? Reach out and we’ll respond promptly.
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl p-6 rounded-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-300">Name</label>
          <Input id="name" name="name" placeholder="Your full name" required className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#81ff00]" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-300">Email</label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#81ff00]" />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-300">Message</label>
          <Textarea id="message" name="message" placeholder="How can we help?" rows={5} required className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#81ff00]" />
        </div>
        <div className="flex items-center gap-3">
          <Button type="submit" className="bg-[#81ff00] text-black hover:bg-[#a6d42b] rounded-full font-medium">Send Message</Button>
          {status && <p className="text-sm text-gray-400">{status}</p>}
        </div>
      </form>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-4 p-6 rounded-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Get in Touch</h2>
            <p className="text-gray-400">We'd love to hear from you. Reach out and we'll get back to you as soon as possible.</p>
          </div>
          
          <div className="space-y-3 text-sm text-gray-300">
            <div>
              <h3 className="font-medium text-white">Email</h3>
              <p className="text-gray-400">hello@technoclub.campus</p>
            </div>
            <div>
              <h3 className="font-medium text-white">Location</h3>
              <p className="text-gray-400">Innovation Lab, Building E</p>
              <p className="text-gray-400">123 Tech Street, Silicon Valley</p>
            </div>
            <div>
              <h3 className="font-medium text-white">Hours</h3>
              <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="h-96 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
          <iframe
            title="Location Map"
            className="h-full w-full"
            style={{ border: 0 }}
            src="https://www.openstreetmap.org/export/embed.html?bbox=74.01546%2C18.48015%2C74.03546%2C18.50015&layer=mapnik&marker=18.490151275500775%2C74.02545879463594"
          />
          <p className="mt-2 text-xs text-gray-400 text-center">
            View larger map on <a className="underline text-[#81ff00]" target="_blank" rel="noreferrer" href="https://www.openstreetmap.org/?mlat=18.490151275500775&mlon=74.02545879463594#map=16/18.49015/74.02546">OpenStreetMap</a>
          </p>
        </div>
      </div>
    </main>
  );
}