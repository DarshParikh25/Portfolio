/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'dancing': ['"Dancing Script"', 'cursive'],
                'rounded': ['"M PLUS Rounded 1c"', 'sans-serif'],
                'keania': ['"Keania One"', 'cursive'],
            },
        },
    },
    plugins: [],
} 