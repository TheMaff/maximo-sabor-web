"use client";

import { useState } from "react";
import Image from "next/image";

export const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // Mapeamos exactamente los nombres de los archivos que tienes en tu carpeta public/gallery
    const images = [
        { src: "/gallery/banqueteria.webp", alt: "Banquetería Premium en Coquimbo" },
        { src: "/gallery/bocado-tapadito.webp", alt: "Tapaditos artesanales de autor" },
        { src: "/gallery/bocado-tartaleta.webp", alt: "Mini tartaletas de fruta gourmet" },
        { src: "/gallery/postre.webp", alt: "Postres premium en vasito" },
        { src: "/gallery/tabla-quesos-fiambres.webp", alt: "Tabla de quesos y fiambres" },
        { src: "/gallery/bocado-alfajor.webp", alt: "Alfajores artesanales" },
        { src: "/gallery/torta.webp", alt: "Torta de autor para eventos" },
    ];

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
                            key={index}
                            className="relative flex-none w-[280px] aspect-[4/5] overflow-hidden cursor-pointer group bg-brand-dark/5 snap-center border border-brand-gold/10"
                            onClick={() => setSelectedImage(index)}
                        >
                            {/* Ahora usamos el componente Image de Next.js con tus rutas reales */}
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 768px) 280px, 280px"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay sutil al pasar el mouse */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-brand-dark/20 transition-opacity duration-500">
                                <span className="text-brand-cream text-sm font-sans tracking-widest uppercase bg-brand-dark/50 px-4 py-2 backdrop-blur-sm border border-brand-gold/30">
                                    Ver detalle
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicador visual sutil de scroll */}
                <div className="flex justify-center gap-2 mt-2">
                    <div className="w-12 h-0.5 bg-brand-gold/30"></div>
                </div>
            </div>

            {/* Lightbox / Popup Modal */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-brand-cream hover:text-brand-gold text-4xl transition-colors z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        &times;
                    </button>

                    <div
                        className="relative contents w-auto max-w-5xl aspect-square md:aspect-video shadow-2xl border border-brand-gold/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Imagen a tamaño completo */}
                        <Image
                            src={images[selectedImage].src}
                            alt={images[selectedImage].alt}
                            fill
                            sizes="100vw"
                            className="object-contain bg-brand-dark"
                            priority // Prioridad alta al abrir el popup
                        />
                    </div>
                </div>
            )}
        </section>
    );
};