import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2C2C2C',
        accent: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: '#6B7280',
            lineHeight: '1.75',
            'h2, h3': {
              color: '#2C2C2C',
              fontWeight: '600',
            },
            a: {
              color: '#4F46E5',
              textDecoration: 'none',
              '&:hover': { color: '#4338CA' },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
