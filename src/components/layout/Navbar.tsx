import Image from 'next/image';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-brand-gold/20">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">

                {/* LOGO  */}
                <div className="relative w-48 h-16 flex items-center">
                    <Image
                        src="/logo.svg"
                        alt="Maximo Sabor Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>

                <div className="hidden md:flex items-center gap-8 text-brand-cream/90 uppercase text-xs tracking-widest font-semibold">
                    <a href="#experiencia" className="hover:text-brand-gold transition-colors">Experiencia</a>
                    <a href="#galeria" className="hover:text-brand-gold transition-colors">Galería</a>
                    <a href="#cotizador" className="border border-brand-gold px-5 py-2.5 text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300">
                        Cotizar Evento
                    </a>
                </div>
            </div>
        </nav>
    );
};