let colors = require('tailwindcss/colors')
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'cool-gray': colors.coolGray
            },
            animation: {
                wiggle: 'wiggle 0.2s ease-in 2',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(9deg)' },
                    '50%': { transform: 'rotate(-9deg)' },
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}