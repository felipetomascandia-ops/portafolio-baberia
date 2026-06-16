# Black Crown Barber Studio

Landing premium para barberia construida con `Next.js` y `App Router`, pensada para verse profesional, vender bien y desplegarse facilmente en Vercel.

## Stack

- `Next.js 15`
- `React 19`
- `App Router`
- `next/font`
- SEO con metadata, `manifest`, `robots` y `sitemap`
- API route para formulario en `app/api/contact/route.js`

## Incluye

- Home premium con bloques comerciales y CTA
- Paginas internas: `Servicios`, `Nosotros` y `Contacto`
- Formulario funcional conectado a una API route
- Datos centralizados para editar marca, precios y contacto
- Assets para icono y vista previa social

## Ejecutar en local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
npm run start
```

## Despliegue en Vercel

1. Sube este proyecto a GitHub.
2. Importa el repositorio en [Vercel](https://vercel.com).
3. Vercel detectara `Next.js` automaticamente.
4. Despliega sin configuracion extra.

## Personalizacion rapida

- Edita los datos del negocio en `lib/site-data.js`.
- Ajusta la interfaz global en `app/globals.css`.
- Modifica la composicion de secciones desde `app/page.js`.
- Cambia icono y vista previa social en `public/icon.svg` y `public/og-image.svg`.
- Si quieres envio real por correo, conecta la API route con `Resend`, `Nodemailer` o tu CRM.

## Siguientes mejoras recomendadas

- Integrar formulario real con `Resend`, `EmailJS` o API propia.
- Conectar agenda online con `Calendly`, `Cal.com` o sistema interno.
- Sustituir placeholders por fotos reales del negocio.
- Anadir blog, promociones y captacion SEO local por ciudad.
