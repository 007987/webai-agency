import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
      },
      colors: {
        cream: '#EEEAE2',
        ink: '#0A0A0A',
        gold: '#8B7355',
        'gold-light': '#C8A97E',
        'cream-dark': '#E5E0D6',
      },
    },
  },
  plugins: [],
}

export default config
