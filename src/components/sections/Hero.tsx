import Image from 'next/image';

export const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
            {/* Fondo con imagen y overlay para mejorar la lectura */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-banquete.png"
                    alt="Banquetería Premium en Coquimbo"
                    fill
                    className="object-cover"
                    priority // Crítico para el LCP (Largest Contentful Paint) en SEO
                />
                <div className="absolute inset-0 bg-brand-dark/50 bg-gradient-to-b from-brand-dark/70 via-brand-dark/30 to-brand-dark/90 mix-blend-multiply"></div>
            </div>

            {/* Contenido Principal */}
            <div className="relative z-10 px-4 max-w-5xl mx-auto flex flex-col items-center gap-6 mt-16">
                <h1 className="text-5xl md:text-7xl font-serif text-brand-cream leading-tight">
                    EXPERIENCIAS <br className="hidden md:block" />
                    <span className="text-brand-gold italic">GASTRONÓMICAS</span> DE AUTOR
                </h1>

                <p className="text-lg md:text-xl text-brand-cream/90 font-sans max-w-2xl font-light tracking-wide">
                    En Coquimbo, transformamos tu evento corporativo o social en una obra de arte inolvidable.
                </p>

                <div className="pt-8">
                    <a
                        href="#cotizador"
                        className="inline-block bg-brand-gold text-brand-dark px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-brand-cream hover:scale-105 transition-all duration-300"
                    >
                        Comienza tu Evento
                    </a>
                </div>
            </div>
        </section>
    );
};