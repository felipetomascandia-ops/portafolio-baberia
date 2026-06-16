import { SectionHeading } from "@/components/section-heading";

export function Process({ steps }) {
  return (
    <section className="section" id="proceso">
      <div className="container">
        <SectionHeading
          eyebrow="Proceso"
          title="Una narrativa de servicio que eleva la percepcion del negocio."
          description="La web no solo muestra servicios: vende el metodo, el detalle y el resultado esperado."
        />

        <div className="process-grid">
          {steps.map((step) => (
            <article key={step.step} className="process-card">
              <span>{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
