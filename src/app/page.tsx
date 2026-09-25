import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { Hero } from "@/components/sections/Hero";
import { Numbers } from "@/components/sections/Numbers";
import { Manifesto } from "@/components/sections/Manifesto";
import { Approach } from "@/components/sections/Approach";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Prospecting } from "@/components/sections/Prospecting";
import { Leads } from "@/components/sections/Leads";
import { Archive } from "@/components/sections/Archive";
import { Venture } from "@/components/sections/Venture";
import { Geography } from "@/components/sections/Geography";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/layout/JsonLd";

export default function Home() {
  return (
    <>
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
        </div>
        <Venture />
        <Geography />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
      <JsonLd />
    </>
  );
}
