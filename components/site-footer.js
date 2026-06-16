import Link from "next/link";

export function SiteFooter({ config, navigation = [] }) {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap footer-grid">
        <div>
          <p>{`© ${new Date().getFullYear()} ${config.name}. Todos los derechos reservados.`}</p>
          <small>{config.address}</small>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-actions">
          <a href={config.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={config.whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
