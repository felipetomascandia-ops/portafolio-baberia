import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Showcase } from "@/components/showcase";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ValuePillars } from "@/components/value-pillars";
import {
  aboutStory,
  expertiseCards,
  footerNavigation,
  mainNavigation,
  siteConfig,
  valuePillars
} from "@/lib/site-data";

export const metadata = {
  title: "Nosotros",
  description:
    "Conoce la propuesta de marca, experiencia y posicionamiento premium de Black Crown Barber Studio."
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <SiteHeader navigation={mainNavigation} contactHref="/contacto" />

      <main>
        <PageHero
          eyebrow="Nosotros"
          title="Una barberia que se presenta como marca, experiencia y detalle."
          description="Esta pagina refuerza identidad, propuesta de valor y el tono premium con el que el negocio se quiere posicionar."
          primaryHref="/contacto"
          primaryLabel="Hablar con nosotros"
          secondaryHref="/servicios"
          secondaryLabel="Ver servicios"
        />

        <section className="section">
          <div className="container story-grid">
            <div>
              <SectionHeading
                eyebrow="Historia"
                title="Pensada para transmitir nivel desde el primer scroll."
                description="La narrativa de marca ayuda a que la barberia se vea mas solida, confiable y vendible."
              />
            </div>

            <div className="story-panel">
              {aboutStory.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </section>

        <ValuePillars items={valuePillars} />
        <Showcase cards={expertiseCards} />
        <ContactCta config={siteConfig} />
      </main>

      <SiteFooter config={siteConfig} navigation={footerNavigation} />
    </div>
  );
}
