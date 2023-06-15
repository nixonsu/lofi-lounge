/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Unibody',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(186px, 1fr))',
      },
    },
  },
  plugins: [],
}
