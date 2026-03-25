import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#706D6D',
        accent: '#000000',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1400px',
      },
      spacing: {
        gutter: '4vw',
        'gutter-mobile': '6vw',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
