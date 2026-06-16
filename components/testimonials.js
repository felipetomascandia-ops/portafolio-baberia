import { SectionHeading } from "@/components/section-heading";

export function Testimonials({ items }) {
  return (
    <section className="section" id="testimonios">
      <div className="container">
        <SectionHeading
          eyebrow="Qué dicen de nosotros"
          title="La opinión de nuestros clientes es nuestro mejor trofeo."
          narrow
        />

        <div className="testimonial-grid">
          {items.map((item) => (
            <article key={item.name} className="testimonial-card">
              <p>{`"${item.quote}"`}</p>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
