/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        istok: ['var(--font--istok)', 'sans-serif'],
        ibara: ['var(--font--ibara)', 'sans-serif'],
        nunito: ['var(--font--nunito)', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        bgcolor: '#1a1a1f',
        textColor: '#fafafa',
        bgCard: '#414043',
        cardText: '#343336',
        subtitle: '#78787a'
      },
    },
  },
  plugins: [],
}
