import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { DotGrid, CursorSpotlight } from "@/components/effects";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Processia - Intelligent Automation Platform",
  description:
    "Construye procesos que escalan. No equipos que no lo hagan. Automatización impulsada por IA para negocios modernos.",
  keywords: [
    "automatización",
    "IA",
    "CRM",
    "flujo de trabajo",
    "automatización empresarial",
    "n8n",
  ],
  authors: [{ name: "Processia" }],
  openGraph: {
    title: "Processia - Plataforma de Automatización Inteligente",
    description:
      "Construye procesos que escalan. No equipos que no lo hagan. Automatización impulsada por IA.",
    type: "website",
    locale: "es_ES",
    siteName: "Processia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Processia - Plataforma de Automatización Inteligente",
    description:
      "Construye procesos que escalan. No equipos que no lo hagan.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="es" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* Background Effects */}
          <DotGrid />
          <CursorSpotlight />

          {/* Layout Structure */}
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
