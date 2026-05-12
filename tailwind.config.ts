// tailwind.config.ts
const config: Config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    gold: '#C5A059',      // Oro mate del logo
                    dark: '#051C2C',      // Azul petróleo profundo de la versión catering
                    cream: '#F9F7F2',     // Fondo "Off-white" para elegancia
                    charcoal: '#2D2D2D',  // Gris para textos legibles
                },
            },
            fontFamily: {
                serif: ['var(--font-didot)', 'serif'], // Para títulos de lujo
                sans: ['var(--font-inter)', 'sans-serif'], // Para lectura clara
            },
        },
    },
};