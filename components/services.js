import { SectionHeading } from "@/components/section-heading";

export function Services({ items }) {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <SectionHeading
          eyebrow="Nuestros Servicios"
          title="Hechos a tu medida, con la dedicación que mereces."
          description="Cada servicio es una experiencia. Nos tomamos el tiempo para que cada detalle quede perfecto y salgas de aquí sintiéndote renovado."
        />

        <div className="service-grid">
          {items.map((item) => (
            <article
              key={item.title}
              className={`service-card${item.featured ? " featured" : ""}`}
            >
              {item.featured ? <span className="service-badge">Mas reservado</span> : null}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
