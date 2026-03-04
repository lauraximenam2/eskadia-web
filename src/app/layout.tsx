import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { DotGrid, CursorSpotlight } from "@/components/effects";
import { ChatWidget } from "@/components/chat/chat-widget";

export const metadata: Metadata = {
  title: "Eskadia - AI-liados de tu progreso",
  description:
    "AI-liados de tu progreso. Automatización inteligente, CRM con IA y consultoría para empresas modernas.",
  keywords: [
    "automatización",
    "IA",
    "CRM",
    "workflow",
    "automatización empresarial",
    "n8n",
    "consultoría",
  ],
  authors: [{ name: "Eskadia" }],
  openGraph: {
    title: "Eskadia - AI-liados de tu progreso",
    description:
      "AI-liados de tu progreso. Automatización inteligente, CRM con IA y consultoría para empresas modernas.",
    type: "website",
    locale: "es_ES",
    siteName: "Eskadia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eskadia - AI-liados de tu progreso",
    description:
      "AI-liados de tu progreso.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
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

        {/* Chat Widget */}
        <ChatWidget />
      </body>
    </html>
  );
}
