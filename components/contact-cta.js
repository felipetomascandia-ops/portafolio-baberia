export function ContactCta({ config }) {
  return (
    <section className="section" id="contacto">
      <div className="container booking-card">
        <div className="booking-copy">
          <span className="eyebrow">Reserva</span>
          <h2>Lista para vender desde el primer vistazo y crecer con el negocio.</h2>
          <p>
            Puedes usarla como demo comercial, proyecto de portafolio o base real para una
            barberia que quiera verse premium en internet.
          </p>
        </div>

        <div className="booking-actions">
          <a
            className="btn btn-primary"
            href={config.whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            Reservar por WhatsApp
          </a>
          <a className="btn btn-secondary" href="/contacto">
            Ir a contacto completo
          </a>
          <a className="contact-link" href={config.phoneHref}>
            {config.phoneDisplay}
          </a>
          <a className="contact-link" href={`mailto:${config.email}`}>
            {config.email}
          </a>
          <p className="schedule">{config.schedule}</p>
        </div>
      </div>
    </section>
  );
}
