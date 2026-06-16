import Script from "next/script";

import { ContactCta } from "@/components/contact-cta";
import { Experience } from "@/components/experience";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Results } from "@/components/results";
import { Services } from "@/components/services";
import { Showcase } from "@/components/showcase";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Testimonials } from "@/components/testimonials";
import { ValuePillars } from "@/components/value-pillars";
import {
  experienceItems,
  faqItems,
  footerNavigation,
  heroStats,
  mainNavigation,
  processSteps,
  resultCards,
  serviceCategories,
  showcaseCards,
  siteConfig,
  testimonials,
  trustBadges,
  valuePillars
} from "@/lib/site-data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: siteConfig.name,
  description: siteConfig.description,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Gran Via 120",
    addressLocality: "Madrid",
    addressCountry: "ES"
  },
  openingHours: ["Mo-Sa 10:00-21:00"],
  url: siteConfig.url
};

export default function HomePage() {
  return (
    <>
      <Script id="barbershop-schema" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="page-shell">
        <SiteHeader navigation={mainNavigation} contactHref="/contacto" />

        <main>
          <Hero stats={heroStats} whatsappHref={siteConfig.whatsappHref} />

          <section className="trust-bar">
            <div className="container trust-items">
              {trustBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </section>

          <Services items={serviceCategories} />
          <Experience items={experienceItems} cards={showcaseCards} />
          <Process steps={processSteps} />
          <Results items={resultCards} />
          <ValuePillars items={valuePillars} />
          <Showcase cards={showcaseCards} />
          <Testimonials items={testimonials} />
          <Faq items={faqItems} />
          <ContactCta config={siteConfig} />
        </main>

        <SiteFooter config={siteConfig} navigation={footerNavigation} />
      </div>
    </>
  );
}
