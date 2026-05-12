import type { Config } from "tailwindcss";

const config: Config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    gold: '#C5A059',
                    dark: '#051C2C',
                    cream: '#F9F7F2',
                    charcoal: '#2D2D2D',
                },
            },
            fontFamily: {
                serif: ['var(--font-didot)', 'serif'],
                sans: ['var(--font-inter)', 'sans-serif'],
            },
        },
    },
};

export default config;