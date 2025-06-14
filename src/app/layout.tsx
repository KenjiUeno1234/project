import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";
import { Analytics } from "@/components/analytics";
import { SkipLink } from "@/components/skip-link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Nexus - 生成AIコンサルティング | ビジネス変革を支援",
  description: "生成AI導入支援のエキスパートとして、ChatGPT・Claude等のAIツール導入からデータ戦略まで包括的にサポート。無料相談で最適なAIソリューションをご提案します。",
  keywords: ["生成AI", "AI導入支援", "ChatGPT", "Claude", "AIコンサルティング", "デジタル変革", "DX", "業務効率化"],
  authors: [{ name: "AI Nexus" }],
  creator: "AI Nexus",
  publisher: "AI Nexus",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://ai-nexus.com",
    siteName: "AI Nexus",
    title: "AI Nexus - 生成AIコンサルティング | ビジネス変革を支援",
    description: "生成AI導入支援のエキスパートとして、ChatGPT・Claude等のAIツール導入からデータ戦略まで包括的にサポート。無料相談で最適なAIソリューションをご提案します。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Nexus - 生成AIでビジネスを革新",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ai_nexus",
    creator: "@ai_nexus",
    title: "AI Nexus - 生成AIコンサルティング | ビジネス変革を支援",
    description: "生成AI導入支援のエキスパートとして、ChatGPT・Claude等のAIツール導入からデータ戦略まで包括的にサポート。",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://ai-nexus.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <Analytics />
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
