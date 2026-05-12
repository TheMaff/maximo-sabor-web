"use client";

import { useState } from "react";
import Image from "next/image";

export const Gallery = () => {
    // Estado para controlar el popup
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // Array de imágenes (Aquí pondrás las rutas de tus mejores fotos)
    const images = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <section id="galeria" className="w-full bg-brand-cream border-t border-b border-brand-gold py-16 relative">
            <div className="text-center mb-12 px-4">
                <h3 className="font-serif text-xl md:text-2xl tracking-[0.3em] text-brand-dark uppercase">
                    IOO-tos
                    <span className="text-brand-gold mx-2">&bull;</span>
                    Dulces
                    <span className="text-brand-gold mx-2">&bull;</span>
                    Salados
                </h3>
            </div>

            {/* Contenedor del Carrusel */}
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                    {images.map((item, index) => (
                        <div
                            key={item}
                            className="relative flex-none w-[280px] aspect-[4/5] overflow-hidden cursor-pointer group bg-brand-dark/5 snap-center border border-brand-gold/10"
                            onClick={() => setSelectedImage(index)}
                        >
                            {/* <Image 
                src={`/gallery-${item}.webp`} 
                alt={`Bocado de autor ${item}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              /> */}
                            <div className="absolute inset-0 flex items-center justify-center text-brand-charcoal/40 text-xs font-sans p-4 text-center transition-colors group-hover:bg-brand-dark/10">
                                Experiencia {item}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicador visual sutil de scroll */}
                <div className="flex justify-center gap-2 mt-2">
                    <div className="w-12 h-0.5 bg-brand-gold/30"></div>
                </div>
            </div>

            {/* Lightbox / Popup Modal (Se mantiene igual) */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-brand-cream hover:text-brand-gold text-4xl transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        &times;
                    </button>

                    <div
                        className="relative w-full max-w-4xl aspect-[4/3] md:aspect-video bg-brand-dark shadow-2xl border border-brand-gold/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-brand-gold font-serif text-2xl">
                            Vista Ampliada {images[selectedImage]}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};