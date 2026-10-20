import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/data/site";
import { SITE_URL } from "@/lib/siteUrl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — Full Stack & AI Engineer`,
    template: `%s · ${site.name}`,
  },
  description:
    "Ahmad Sajjad — full-stack & AI engineer, founder of Reivex Technologies, co-founder of Binary Brains. CodeRush 2026 winner. UET Lahore. 3+ years shipping production-grade web, mobile, and AI products from Lahore, Pakistan.",
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
      "Ahmad Sajjad — full-stack & AI engineer, founder of Reivex Technologies, co-founder of Binary Brains. UET Lahore alum. Shipping web, mobile, and AI products from Lahore, Pakistan.",
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — Full Stack & AI Engineer`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Full Stack & AI Engineer`,
    description:
      "Ahmad Sajjad — full-stack & AI engineer, founder of Reivex Technologies. Shipping web, mobile, and AI products from Lahore, Pakistan.",
    creator: site.twitter,
    site: site.twitter,
    images: ["/opengraph-image"],
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <link rel="me" href={site.github} />
        <link rel="me" href={site.linkedin} />
        <JsonLd />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <SmoothScroll />
        <Nav />
        {children}
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.omnisend=window.omnisend||[];omnisend.push(["brandID","6a95702ea42b56bd65ef6e70"]);omnisend.push(["track","$pageViewed"]);!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://omnisnippet1.com/inshop/launcher-v2.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();`,
          }}
        />
      </body>
    </html>
  );
}
