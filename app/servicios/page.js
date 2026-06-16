import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { Process } from "@/components/process";
import { Results } from "@/components/results";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  footerNavigation,
  mainNavigation,
  processSteps,
  resultCards,
  serviceCategories,
  siteConfig
} from "@/lib/site-data";

export const metadata = {
  title: "Servicios",
  description:
    "Servicios premium de barberia presentados con una propuesta de valor clara, visual y profesional."
};

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <SiteHeader navigation={mainNavigation} contactHref="/contacto" />

      <main>
        <PageHero
          eyebrow="Servicios premium"
          title="Una carta de servicios pensada para justificar precio y proyectar nivel."
          description="Cada servicio esta redactado para elevar valor percibido y ayudar a vender una barberia con posicionamiento premium."
          primaryHref="/contacto"
          primaryLabel="Solicitar reserva"
          secondaryHref="/"
          secondaryLabel="Volver al inicio"
        />
        <Services items={serviceCategories} />
        <Process steps={processSteps} />
        <Results items={resultCards} />
        <ContactCta config={siteConfig} />
      </main>

      <SiteFooter config={siteConfig} navigation={footerNavigation} />
    </div>
  );
}
