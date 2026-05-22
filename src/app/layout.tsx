import type { Metadata, Viewport } from "next";
import {
  Fraunces,
  Geist,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";
import { SITE_URL } from "@/lib/siteUrl";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — Full Stack & AI Engineer`,
    template: `%s · ${site.name}`,
  },
  description:
    "Full-stack & AI engineer building production-grade web, mobile, and AI products. Founder of Reivex.io. Based in Lahore, Pakistan.",
  applicationName: site.name,
  authors: [{ name: site.name, url: site.company.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "Ahmad Sajjad",
    "Reivex",
    "Reivex.io",
    "full stack engineer",
    "AI engineer",
    "Next.js engineer",
    "React engineer",
    "TypeScript",
    "iOS engineer",
    "Pakistan",
    "Lahore",
    "freelance developer",
    "Shopify developer",
    "WordPress developer",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    siteName: site.name,
    title: `${site.name} — Full Stack & AI Engineer`,
    description:
      "Full-stack & AI engineer building production-grade web, mobile, and AI products. Founder of Reivex.io.",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Full Stack & AI Engineer`,
    description:
      "Full-stack & AI engineer building production-grade web, mobile, and AI products. Founder of Reivex.io.",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#FBFBFA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSerif.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
