import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

// Configuración de la fuente Serif (Lujo)
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-didot", // Mantenemos el nombre de tu variable en Tailwind
});

// Configuración de la fuente Sans (Lectura clara)
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Maximo Sabor | Cóctel y Banquetería en Coquimbo",
  description: "Cotiza cientos de bocados dulces y salados de autor para tus celebraciones en Coquimbo. Especialistas en cóctel para matrimonios, bautizos, cumpleaños y todo tipo de eventos.",
  keywords: [
    "banquetería Coquimbo",
    "cientos de dulces",
    "cientos de salados",
    "cóctel para eventos",
    "postres para cocktail",
    "catering matrimonios Coquimbo",
    "Maximo Sabor"
  ],
  openGraph: {
    title: "Maximo Sabor | Cóctel y Banquetería",
    description: "Cientos de opciones en dulces y salados de autor para matrimonios, bautizos, cumpleaños y eventos corporativos en Coquimbo. Cotiza sin compromiso.",
    url: "https://maximosabor.vercel.app", // Aquí irá tu dominio final (.cl o .com)
    siteName: "Maximo Sabor",
    images: [
      {
        url: "/gallery/banqueteria.webp", // Usará tu mejor foto al compartir el link
        width: 1200,
        height: 630,
        alt: "Mesa de Banquetería Premium Maximo Sabor",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable} scroll-smooth`}>
      <body className="antialiased bg-brand-dark text-brand-cream font-sans">
        {children}
      </body>
    </html>
  );
}