/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Holz & Stein Palette
          primary: "#8b5e3c",   // Holzbraun
          secondary: "#4b5563", // Steingrau
          accent: "#047857",    // Moosgrün
          light: "#fefefe",     // Warmweiß
        },
      },
    },
  },
  plugins: [],
};