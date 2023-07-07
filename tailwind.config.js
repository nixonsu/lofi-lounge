/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    //The following utility classes are safelisted for tailwindcss to recognise these
    // dynamically generated classes when it scans the code to generate css
    'bg-green-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-gray-500',
    'bg-yellow-500',
    'bg-blue-500',
  ],
  theme: {
    screens: {
      tablet: { max: '640px' },
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
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
