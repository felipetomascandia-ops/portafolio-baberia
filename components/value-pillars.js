import { SectionHeading } from "@/components/section-heading";

export function ValuePillars({ items }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Pilares"
          title="Una marca premium necesita presencia, conversion y escalabilidad."
          description="Estos pilares resumen por que esta base no solo se ve bien, sino que tambien sirve comercialmente."
        />

        <div className="process-grid">
          {items.map((item) => (
            <article key={item.title} className="process-card">
              <span>{item.title}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
