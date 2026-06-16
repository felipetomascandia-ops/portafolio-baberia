import { Inter, Manrope } from "next/font/google";

import "@/app/globals.css";
import { siteConfig } from "@/lib/site-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Barberia Premium`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "barberia premium",
    "next js barberia",
    "landing page barber shop",
    "corte de cabello",
    "barber shop website"
  ],
  applicationName: siteConfig.name,
  category: "business",
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: `${siteConfig.name} | Barberia Premium`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Barberia Premium`,
    description: siteConfig.description,
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
