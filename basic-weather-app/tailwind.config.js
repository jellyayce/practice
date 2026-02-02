/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ← must include your React components
  ],
  theme: { extend: {} },
  plugins: [],
}
