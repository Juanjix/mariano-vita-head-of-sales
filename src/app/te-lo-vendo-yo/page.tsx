import type { Metadata } from "next";
import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { DEFAULT_LOCALE } from "@/types/content";
import { DocumentMeta } from "@/lib/i18n";
import { MotionRuntime } from "@/components/motion/MotionRuntime";
import { TlvyNav } from "@/components/te-lo-vendo-yo/TlvyNav";
import { Hero } from "@/components/te-lo-vendo-yo/Hero";
import { Differentiator } from "@/components/te-lo-vendo-yo/Differentiator";
import { Problem } from "@/components/te-lo-vendo-yo/Problem";
import { Solution } from "@/components/te-lo-vendo-yo/Solution";
import { Comparison } from "@/components/te-lo-vendo-yo/Comparison";
import { Process } from "@/components/te-lo-vendo-yo/Process";
import { Tools } from "@/components/te-lo-vendo-yo/Tools";
import { Cases } from "@/components/te-lo-vendo-yo/Cases";
import { LowTurnover } from "@/components/te-lo-vendo-yo/LowTurnover";
import { Why } from "@/components/te-lo-vendo-yo/Why";
import { Services } from "@/components/te-lo-vendo-yo/Services";
import { Founder } from "@/components/te-lo-vendo-yo/Founder";
import { Faq } from "@/components/te-lo-vendo-yo/Faq";
import { FinalCta } from "@/components/te-lo-vendo-yo/FinalCta";
import { TlvyFooter } from "@/components/te-lo-vendo-yo/TlvyFooter";
import { MobileCta } from "@/components/te-lo-vendo-yo/MobileCta";

const title = tlvy.seo.title[DEFAULT_LOCALE];
const description = tlvy.seo.description[DEFAULT_LOCALE];

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/te-lo-vendo-yo" },
  openGraph: {
    type: "website",
    url: "/te-lo-vendo-yo",
    siteName: "Te Lo Vendo Yo",
    title,
    description,
    locale: "es_CO",
    alternateLocale: ["en_US"],
  },
  twitter: { card: "summary_large_image", title, description },
};

/**
 * Te Lo Vendo Yo — dealership-first commercial landing.
 * Future routes can live beside this file: /te-lo-vendo-yo/casos,
 * /te-lo-vendo-yo/casos/[slug] (reading content/te-lo-vendo-yo/cases.ts) and
 * /te-lo-vendo-yo/vender-mi-auto (private sellers).
 */
export default function TeLoVendoYoPage() {
  return (
    <div className="tl-page">
      <DocumentMeta seo={tlvy.seo} />
      <TlvyNav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Differentiator />
        <Problem />
        <Solution />
        <Comparison />
        <Process />
        <Tools />
        <Cases />
        <LowTurnover />
        <Why />
        <Services />
        <Founder />
        <Faq />
        <FinalCta />
      </main>
      <TlvyFooter />
      <MobileCta />
      <MotionRuntime />
    </div>
  );
}
