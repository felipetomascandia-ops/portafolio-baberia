import { SectionHeading } from "@/components/section-heading";

export function Showcase({ cards }) {
  return (
    <section className="section section-tight">
      <div className="container">
        <SectionHeading
          eyebrow="Valor"
          title="Pensada para verse cara, vender mejor y escalar despues."
          description="Estas piezas refuerzan por que esta web no parece una plantilla generica, sino una presencia digital lista para negocio."
        />

        <div className="showcase-grid">
          {cards.map((card) => (
            <article key={card.title} className="showcase-card">
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
