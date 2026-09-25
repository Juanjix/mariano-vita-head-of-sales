import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { MotionRuntime } from "@/components/motion/MotionRuntime";
import { Hero } from "@/components/sections/Hero";
import { Numbers } from "@/components/sections/Numbers";
import { Manifesto } from "@/components/sections/Manifesto";
import { Approach } from "@/components/sections/Approach";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Prospecting } from "@/components/sections/Prospecting";
import { Leads } from "@/components/sections/Leads";
import { Archive } from "@/components/sections/Archive";
import { Timeline } from "@/components/sections/Timeline";
import { Venture } from "@/components/sections/Venture";
import { Geography } from "@/components/sections/Geography";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/layout/JsonLd";
import { DocumentMeta } from "@/lib/i18n";
import { seo } from "@/content/site-content";

export default function Home() {
  return (
    <>
      <DocumentMeta seo={seo} />
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Numbers />
        <Manifesto />
        <Approach />
        {/* "Experience" groups the proof-of-work chapters for navigation */}
        <div id="experience">
          <CaseStudy />
          <Prospecting />
          <Leads />
          <Archive />
          <Timeline />
        </div>
        {/* Chronology → Argentina → Colombia → what's next */}
        <Geography />
        <Venture />
        <Contact />
      </main>
      <Footer />
      <MotionRuntime />
      <JsonLd />
    </>
  );
}
