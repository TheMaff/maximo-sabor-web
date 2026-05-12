import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      {/* Las siguientes secciones irán aquí */}
      <div className="h-screen"></div> {/* Espacio temporal para probar el scroll */}
    </main>
  );
}