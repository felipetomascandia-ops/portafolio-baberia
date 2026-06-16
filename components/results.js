import { SectionHeading } from "@/components/section-heading";

export function Results({ items }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Resultados"
          title="Una presencia digital diseñada para parecer una barbería de referencia."
          description="Estas mejoras refuerzan valor percibido, profesionalidad y potencial de venta."
        />

        <div className="showcase-grid">
          {items.map((item) => (
            <article key={item.title} className="showcase-card">
              <span>Impacto</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
