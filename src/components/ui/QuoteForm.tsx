"use client";

import { useState } from "react";

export const QuoteForm = () => {
    const [formData, setFormData] = useState({
        invitados: "",
        tipo: "",
        fecha: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Aquí estructuramos el mensaje para WhatsApp (usando %0A para saltos de línea)
        const text = `Hola Maximo Sabor, me gustaría cotizar una experiencia gastronómica.%0A%0A*Detalles del Evento:*%0A🍽️ Tipo: ${formData.tipo}%0A👥 Invitados: ${formData.invitados}%0A📅 Fecha: ${formData.fecha}%0A%0A¡Quedo a la espera de más información!`;

        // Reemplaza esto con el número real de WhatsApp Business del local (formato internacional sin el +)
        const phone = "56997794706";

        const url = `https://wa.me/${phone}?text=${text}`;
        window.open(url, "_blank"); // Abre en una nueva pestaña
    };

    return (
        <section id="cotizador" className="w-full bg-brand-dark px-4 pb-20 pt-10">
            <div className="max-w-4xl mx-auto bg-brand-cream rounded-sm shadow-2xl p-8 md:p-12 -mt-24 relative z-20 border border-brand-gold/30">

                <div className="text-center mb-8">
                    <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-2">
                        TU EVENTO COMIENZA AQUÍ
                    </h2>
                    <p className="text-brand-charcoal font-sans text-sm tracking-wide">
                        Cuéntanos sobre tu celebración y diseñaremos una propuesta a medida.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* N° Invitados */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="invitados" className="text-xs uppercase tracking-widest text-brand-charcoal font-semibold">
                            N° Invitados
                        </label>
                        <input
                            type="number"
                            id="invitados"
                            name="invitados"
                            required
                            min="10"
                            value={formData.invitados}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-brand-charcoal/30 py-2 focus:outline-none focus:border-brand-gold transition-colors text-brand-dark placeholder-brand-charcoal/40"
                            placeholder="Ej: 50"
                        />
                    </div>

                    {/* Tipo de Evento */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="tipo" className="text-xs uppercase tracking-widest text-brand-charcoal font-semibold">
                            Tipo de Evento
                        </label>
                        <select
                            id="tipo"
                            name="tipo"
                            required
                            value={formData.tipo}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-brand-charcoal/30 py-2 focus:outline-none focus:border-brand-gold transition-colors text-brand-dark cursor-pointer"
                        >
                            <option value="" disabled>Selecciona una opción...</option>
                            <option value="Matrimonio">Matrimonio</option>
                            <option value="Corporativo">Evento Corporativo</option>
                            <option value="Bautizo/Primera Comunión">Bautizo / Comunión</option>
                            <option value="Cumpleaños Premium">Cumpleaños</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>

                    {/* Fecha */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fecha" className="text-xs uppercase tracking-widest text-brand-charcoal font-semibold">
                            Fecha
                        </label>
                        <input
                            type="date"
                            id="fecha"
                            name="fecha"
                            required
                            value={formData.fecha}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-brand-charcoal/30 py-2 focus:outline-none focus:border-brand-gold transition-colors text-brand-dark"
                        />
                    </div>

                    {/* Botón de Enviar */}
                    <div className="md:col-span-3 flex justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-brand-dark text-brand-gold px-12 py-4 uppercase tracking-[0.2em] text-sm font-semibold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 border border-brand-gold"
                        >
                            Solicitar Presupuesto
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
};