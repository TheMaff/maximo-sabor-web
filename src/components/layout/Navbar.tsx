import Image from 'next/image';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-brand-gold/20">
            <div className="max-w-5xl mx-auto px-4 flex justify-between items-center h-20">

                {/* LOGO (Ligeramente ajustado para móvil) */}
                <div className="relative w-36 md:w-48 h-12 md:h-16 flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Maximo Sabor Logo"
                        fill
                        className="object-contain object-left hidden md:inline"
                        priority
                    />
                    <Image
                        src="/logo-mobile.png"
                        alt="Maximo Sabor Logo"
                        fill
                        className="object-contain object-left md:hidden"
                        priority
                    />
                </div>

                {/* CONTENEDOR DERECHO (Links + Botón) */}
                <div className="flex items-center gap-4 md:gap-8">

                    {/* Enlaces (Solo Desktop) */}
                    <div className="hidden md:flex items-center gap-8 text-brand-cream/90 uppercase text-xs tracking-widest font-semibold">
                        <a href="#experiencia" className="hover:text-brand-gold transition-colors">Experiencia</a>
                        <a href="#galeria" className="hover:text-brand-gold transition-colors">Galería</a>
                    </div>

                    {/* Botón CTA (Siempre visible, responsive) */}
                    <a
                        href="#cotizador"
                        className="border border-brand-gold px-4 py-2 md:px-5 md:py-2.5 text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 uppercase text-[10px] md:text-xs tracking-widest font-semibold whitespace-nowrap"
                    >
                        {/* Truco UX: Texto más corto en celular para no romper el layout */}
                        <span className="md:hidden">Cotizar</span>
                        <span className="hidden md:inline">Cotizar Evento</span>
                    </a>

                </div>
            </div>
        </nav>
    );
};