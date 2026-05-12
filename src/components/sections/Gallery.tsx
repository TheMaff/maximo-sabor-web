import Image from 'next/image';

export const Gallery = () => {
    // Array temporal para iterar 6 imágenes de prueba
    const placeholders = [1, 2, 3, 4, 5, 6];

    return (
        <section id="galeria" className="w-full bg-brand-cream border-t-4 border-b-4 border-brand-gold py-16 relative">

            {/* Navegación de Categorías */}
            <div className="text-center mb-12 px-4">
                <h3 className="font-serif text-xl md:text-2xl tracking-[0.3em] text-brand-dark uppercase">
                    100tos
                    <span className="text-brand-gold mx-2">&bull;</span>
                    Dulces
                    <span className="text-brand-gold mx-2">&bull;</span>
                    Salados
                </h3>
            </div>

            {/* Grid Dinámico de Imágenes */}
            <div className="max-w-[1600px] mx-auto px-2 md:px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
                    {placeholders.map((item) => (
                        <div key={item} className="relative aspect-[4/5] w-full overflow-hidden group cursor-pointer bg-brand-dark/10">
                            {/* Nota: Reemplazaremos este div oscuro por imágenes reales cuando las tengas */}
                            {/* <Image 
                src={`/bocado-${item}.jpg`} 
                alt={`Bocado de autor ${item}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              /> 
              */}
                            <div className="absolute inset-0 flex items-center justify-center text-brand-dark/40 font-sans text-sm">
                                Foto {item}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};