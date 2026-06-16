import Link from "next/link";

export function PageHero({ eyebrow, title, description, primaryHref, primaryLabel, secondaryHref, secondaryLabel }) {
  return (
    <section className="section page-hero">
      <div className="container page-hero-grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="hero-actions">
            <Link href={primaryHref} className="btn btn-primary">
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className="btn btn-secondary">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="page-hero-panel">
          <span>Look premium</span>
          <h2>Arquitectura pensada para una marca que quiere verse seria y vender mejor.</h2>
          <p>
            Cada bloque ayuda a reforzar posicionamiento, confianza y una percepcion de valor
            superior.
          </p>
        </div>
      </div>
    </section>
  );
}
