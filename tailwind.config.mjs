/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                green: "#44FFA1",
                "purple-900": "#24053E",
                "purple-500": "#584D62",
                "purple-100": "#FCF8FF",
            },
            fontFamily: {
                sans: ["Manrope", ...defaultTheme.fontFamily.sans],
                serif: ["Fraunces", ...defaultTheme.fontFamily.serif],
            },
            maxWidth: {
                "6xl": "1120px", // Override default 6xl to 1120px
            },
        },
    },
    plugins: [],
}
