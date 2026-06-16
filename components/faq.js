import { SectionHeading } from "@/components/section-heading";

export function Faq({ items }) {
  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHeading
          eyebrow="Notas del Proyecto"
          title="Una base profesional lista para convertirse en un producto real."
          description="Estas respuestas ayudan a vender el proyecto a un cliente final o a presentarlo con más claridad en un repositorio de GitHub."
        />

        <div className="faq-list">
          {items.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
