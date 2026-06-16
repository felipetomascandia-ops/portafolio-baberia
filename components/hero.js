import Link from "next/link";

export function Hero({ stats, whatsappHref }) {
  return (
    <section className="hero section" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Bienvenido a Black Crown Barber Studio</span>
          <h1>El lugar donde tu estilo cobra vida.</h1>
          <p className="hero-text">
            Más que una simple barbería, somos un espacio para el hombre moderno que valora la calidad, la buena conversa y un look impecable. Siéntete como en casa.
          </p>

          <div className="hero-actions">
            <a
              href={whatsappHref}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Agenda tu Hora
            </a>
            <Link href="#servicios" className="btn btn-secondary">
              Nuestros Servicios
            </Link>
          </div>

          <ul className="hero-highlights">
            <li>Una barbería con identidad y estilo propio</li>
            <li>Enfocados en la calidad y la atención al detalle</li>
            <li>Un espacio para desconectar y sentirte renovado</li>
          </ul>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <span className="tag">Nuestra Filosofía</span>
            <span className="rating">★★★★★</span>
          </div>

          <h2>Creemos en el poder de un buen corte de pelo.</h2>
          <p>
            No se trata solo de cortar el pelo, se trata de la confianza que te da un look que te representa. Esa es nuestra meta en cada cita.
          </p>

          <div className="hero-stats">
            {stats.map((item) => (
              <article key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
