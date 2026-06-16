import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { footerNavigation, mainNavigation, siteConfig } from "@/lib/site-data";

export default function NotFound() {
  return (
    <div className="page-shell">
      <SiteHeader navigation={mainNavigation} contactHref="/contacto" />

      <main className="section">
        <div className="container not-found-card">
          <span className="eyebrow">404</span>
          <h1>La pagina que buscas no existe.</h1>
          <p>
            Puedes volver al inicio o ir a contacto para seguir explorando esta demo premium
            de barberia.
          </p>
          <div className="hero-actions">
            <Link href="/" className="btn btn-primary">
              Volver al inicio
            </Link>
            <Link href="/contacto" className="btn btn-secondary">
              Ir a contacto
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter config={siteConfig} navigation={footerNavigation} />
    </div>
  );
}
