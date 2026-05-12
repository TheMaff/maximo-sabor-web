import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { QuoteForm } from "@/components/ui/QuoteForm"; // Añadimos la importación

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <Gallery />
      <QuoteForm />

      {/* Footer Minimalista */}
      <footer className="w-full bg-brand-dark py-8 text-center border-t border-brand-gold/20">
        <p className="text-brand-cream/60 text-xs tracking-widest uppercase font-sans">
          &copy; {new Date().getFullYear()} Maximo Sabor. Coquimbo, Chile. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}