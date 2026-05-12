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
  title: "Maximo Sabor | Banquetería & Cóctel de Autor",
  description: "Transformamos tu evento corporativo o social en Coquimbo en una obra de arte inolvidable.",
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