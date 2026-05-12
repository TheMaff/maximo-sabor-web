// Ejemplo rápido de estructura
export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-brand-gold/20">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Aquí va tu Logo SVG */}
                <div className="text-brand-gold font-serif text-xl">MAXIMO SABOR</div>
                <div className="hidden md:flex gap-8 text-brand-cream/80 uppercase text-xs tracking-widest">
                    <a href="#experiencia" className="hover:text-brand-gold transition">Experiencia</a>
                    <a href="#galeria" className="hover:text-brand-gold transition">Galería</a>
                    <button className="border border-brand-gold px-4 py-2 text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition">
                        Cotizar Evento
                    </button>
                </div>
            </div>
        </nav>
    );
};