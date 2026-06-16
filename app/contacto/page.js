import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  contactBenefits,
  footerNavigation,
  mainNavigation,
  siteConfig
} from "@/lib/site-data";

export const metadata = {
  title: "Contacto",
  description:
    "Reserva, consulta o solicita informacion desde una pagina de contacto profesional con formulario funcional."
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <SiteHeader navigation={mainNavigation} contactHref="/contacto" />

      <main>
        <PageHero
          eyebrow="Contacto"
          title="Reserva, consulta o convierte esta demo en una web lista para cliente real."
          description="La pagina de contacto incorpora formulario funcional en Next.js, canales directos y una presentacion mas profesional para negocio real."
          primaryHref={siteConfig.whatsappHref}
          primaryLabel="Abrir WhatsApp"
          secondaryHref="/servicios"
          secondaryLabel="Ver servicios"
        />

        <section className="section">
          <div className="container contact-grid">
            <div className="contact-panel">
              <span className="eyebrow">Canales</span>
              <h2>Una pagina de contacto pensada para captar y responder rapido.</h2>
              <p>
                La estructura combina formulario, llamada a la accion y datos visibles para
                darle un acabado mas serio y util al proyecto.
              </p>

              <div className="check-list">
                {contactBenefits.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>

              <div className="contact-stack">
                <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <p>{siteConfig.address}</p>
                <p>{siteConfig.schedule}</p>
              </div>
            </div>

            <div className="form-panel">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter config={siteConfig} navigation={footerNavigation} />
    </div>
  );
}
