import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a2744",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ingesealschacao.com"),
  title: "Ingeseals Chacao | Sellos Hidráulicos y Repuestos Industriales en Caracas",
  description:
    "Especialistas en sellos hidráulicos, rodamientos y repuestos industriales en Caracas, Venezuela. Venta, fabricación y asesoría técnica. Contacto: 0412-9621113",
  keywords: [
    "sellos hidráulicos",
    "sellos neumáticos",
    "rodamientos",
    "chumaceras",
    "repuestos industriales",
    "Caracas",
    "Venezuela",
    "Chacao",
    "mantenimiento industrial",
    "maquinaria industrial",
  ],
  authors: [{ name: "Ingeseals Chacao" }],
  creator: "Ingeseals Chacao",
  publisher: "Ingeseals Chacao",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ingeseals Chacao | Sellos Hidráulicos y Repuestos Industriales",
    description:
      "Especialistas en sellos hidráulicos, rodamientos y repuestos industriales en Caracas, Venezuela.",
    url: "https://ingesealschacao.com",
    siteName: "Ingeseals Chacao",
    locale: "es_VE",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 200,
        height: 200,
        alt: "Ingeseals Chacao Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ingeseals Chacao | Sellos Hidráulicos y Repuestos Industriales",
    description:
      "Especialistas en sellos hidráulicos, rodamientos y repuestos industriales en Caracas, Venezuela.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://ingesealschacao.com",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="es">
      <head>
        <meta name="facebook-domain-verification" content="n4jj6frml9qrylet820q7l1bc5cx3p" />
        <meta property="fb:app_id" content="3377155102443322" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
