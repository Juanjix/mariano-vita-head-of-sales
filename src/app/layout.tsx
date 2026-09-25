import type { Metadata, Viewport } from "next";
import { display, grotesk } from "./fonts";
import { seo } from "@/content/site-content";
import { siteUrl } from "@/lib/site-url";
import { DEFAULT_LOCALE } from "@/types/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: seo.title[DEFAULT_LOCALE],
  description: seo.description[DEFAULT_LOCALE],
  applicationName: "Mariano Vita",
  authors: [{ name: "Mariano Vita" }],
  creator: "Mariano Vita",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Mariano Vita",
    title: seo.title[DEFAULT_LOCALE],
    description: seo.description[DEFAULT_LOCALE],
    locale: "es_AR",
    alternateLocale: ["en_US"],
    firstName: "Mariano",
    lastName: "Vita",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title[DEFAULT_LOCALE],
    description: seo.description[DEFAULT_LOCALE],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#1b1916",
  colorScheme: "light",
};

// Marks that JS is running so reveal styles only hide content when they can be revealed.
const jsFlag = `document.documentElement.classList.add('js')`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={DEFAULT_LOCALE} className={`${display.variable} ${grotesk.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
