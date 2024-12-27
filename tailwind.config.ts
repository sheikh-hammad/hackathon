import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",  ],
    safelist: [
      'lg:vertical-lr', // Ensure Tailwind preserves this class
    ],
  theme: {
    extend: {
      colors: {
        fontFamily: {
          inter: "var(--font-inter)",
          helvetica: "var(--font-helvetica)",
          roboto: "var(--font-roboto)",
          openSans: "var(--font-openSans)",
          poppins: "var(--font-poppins)"
        },
        letterSpacing: {
          'custom-percentage': '0.02em'
        },
        screens: {
          '3xl': '1920px',
          'xs': '440px',
        },
        lineHeight: {
          '110': '1.1',
          '120': '1.2',
          '130': '1.3',
          '150': '1.5'
        },
    
  
      },
    },
  },
  plugins: [],
};

export default config;
