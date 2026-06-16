"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader({ navigation, contactHref }) {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          <span className="brand-mark">BC</span>
          <span className="brand-copy">
            <strong>Black Crown</strong>
            <small>Barber Studio</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Principal">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href={contactHref} className="btn btn-outline btn-sm">
          Reservar cita
        </Link>
      </div>
    </header>
  );
}
