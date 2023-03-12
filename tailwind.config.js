/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    theme: {
        extend: {
            height: {
                500: '500px',
            },
            screens: {
                md: { min: '0px', max: '840px' },
                lg: { min: '841px', max: '1024px' },
                xl: { min: '1025px', max: '1280px' },
                '2xl': { min: '1281px', max: '1836px' },
            },
        },
    },
    plugins: [],
};
