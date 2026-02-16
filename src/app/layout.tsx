import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { DotGrid, CursorSpotlight } from "@/components/effects";

export const metadata: Metadata = {
  title: "Processia - Intelligent Automation Platform",
  description:
    "Build processes that scale. Not teams that don't. AI-powered automation for modern businesses.",
  keywords: [
    "automation",
    "AI",
    "CRM",
    "workflow",
    "business automation",
    "n8n",
  ],
  authors: [{ name: "Processia" }],
  openGraph: {
    title: "Processia - Intelligent Automation Platform",
    description:
      "Build processes that scale. Not teams that don't. AI-powered automation for modern businesses.",
    type: "website",
    locale: "en_US",
    siteName: "Processia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Processia - Intelligent Automation Platform",
    description:
      "Build processes that scale. Not teams that don't.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        {/* Background Effects */}
        <DotGrid />
        <CursorSpotlight />

        {/* Layout Structure */}
        <div className="relative flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
