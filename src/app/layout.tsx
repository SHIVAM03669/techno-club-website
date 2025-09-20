import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Techno Smart Campus Club",
  description:
    "Sustainability First, Innovation Drive, Collaborative Spirit, Impact Focused.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Navbar />
        <main className="min-h-[calc(100vh-200px)] pt-24 pb-16">
          <div className="container mx-auto px-4">
            {children}
          </div>
        </main>
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}