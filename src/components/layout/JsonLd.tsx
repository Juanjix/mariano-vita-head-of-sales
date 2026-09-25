import { contactChannels } from "@/content/contact-channels";
import { seo } from "@/content/site-content";
import { siteUrl } from "@/lib/site-url";

/** Structured data: only confirmed facts. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mariano Vita",
    url: siteUrl.toString(),
    description: seo.description.es,
    jobTitle: "Entrepreneur · Business Development",
    nationality: { "@type": "Country", name: "Argentina" },
    homeLocation: { "@type": "Place", name: "Medellín, Colombia" },
    knowsAbout: ["Business Development", "B2B Sales", "Negotiation", "Market Development", "Channel Development"],
    sameAs: contactChannels.filter((c) => c.href.startsWith("http")).map((c) => c.href),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
