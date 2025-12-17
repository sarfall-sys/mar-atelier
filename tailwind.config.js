/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
];
export const theme = {
    extend: {
        colors: {
            primary: {
                DEFAULT: '#f27a8d', // Soft blush 400
                light: '#f8a9b4',   // Soft blush 300
                dark: '#d62f5a',    // Soft blush 600
            },
            secondary: {
                DEFAULT: '#bd95f0', // Lavender mist 400
                light: '#d6bff7',   // Lavender mist 300
                dark: '#8c4ad9',    // Lavender mist 600
            },
            accent: {
                DEFAULT: '#f5c057', // Champagne gold 400
                light: '#f9d98f',   // Champagne gold 300
                dark: '#e18c1a',    // Champagne gold 600
            },
            neutral: {
                DEFAULT: '#e8e9ef', // Pearl white 500
                light: '#f5f5f8',   // Pearl white 300
                dark: '#bcbdc9',    // Pearl white 700
            }

        },
        font: {
            'elegant': ['Playfair Display', 'serif'],
            'sans': ['Inter', 'system-ui', 'sans-serif'],
            'display': ['Cormorant Garamond', 'serif'],
            'script': ['Dancing Script', 'cursive'],
        }
    },
};
export const plugins = [];