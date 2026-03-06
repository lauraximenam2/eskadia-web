import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../../public/fonts/dm-sans/DMSans-Variable.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/dm-sans/DMSans-Italic-Variable.ttf",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const jura = localFont({
  src: "../../public/fonts/jura/Jura-Variable.ttf",
  variable: "--font-jura",
  display: "swap",
});

const chakraPetch = localFont({
  src: [
    {
      path: "../../public/fonts/chakra-petch/ChakraPetch-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/chakra-petch/ChakraPetch-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/chakra-petch/ChakraPetch-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/chakra-petch/ChakraPetch-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-chakra-petch",
  display: "swap",
});
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
        className={`${dmSans.variable} ${jura.variable} ${chakraPetch.variable} font-sans antialiased`}
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
