import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <Gallery />
      {/* Espacio extra abajo para simular el final de la página por ahora */}
      <div className="h-[40vh] bg-brand-dark"></div>
    </main>
  );
}