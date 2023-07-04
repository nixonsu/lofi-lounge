/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        theme: 'var(--glow)',
      },
      dropShadow: {
        theme: ['var(--drop-shadow-one)', 'var(--drop-shadow-two)'],
      },
      fontFamily: {
        primary: 'Unibody',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(286px, 1fr))',
      },
    },
  },
  plugins: [],
}
