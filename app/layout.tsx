import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora-var",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Anish Verma — Social Media Strategist & Growth Associate",
  description:
    "I help creators and brands grow through content strategy, audience insights, performance analytics, and growth-focused social media operations. Currently at Feline Media, powering Sarthak Goswami's The Sunday Show.",
  keywords: [
    "social media strategist",
    "growth associate",
    "content strategy",
    "creator economy",
    "Sarthak Goswami",
    "The Sunday Show",
    "Feline Media",
    "YouTube growth",
    "analytics",
    "Anish Verma",
  ],
  authors: [{ name: "Anish Verma" }],
  openGraph: {
    title: "Anish Verma — Social Media Strategist & Growth Associate",
    description:
      "I help creators and brands grow through content strategy, audience insights, and performance analytics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
