export function Experience({ items, cards }) {
  return (
    <section className="section" id="experiencia">
      <div className="container experience-grid">
        <div className="experience-panel">
          <span className="eyebrow">Enfoque Comercial</span>
          <h2>Un diseño premium orientado a la conversión.</h2>
          <p>
            La interfaz está planteada para verse profesional en una demo comercial, en una marca real o como parte de un portafolio de alto nivel.
          </p>

          <div className="check-list">
            {items.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>

        <div className="metrics-panel">
          {cards.map((card, index) => (
            <article key={card.title}>
              <span>{`0${index + 1}`}</span>
              <h3>{card.label}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
