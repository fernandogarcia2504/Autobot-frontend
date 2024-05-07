import { Black_And_White_Picture } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      //rules refer as min width
      'sm': {'max': '639px'},
      'md': {'min': '640px', 'max': '767px'},
      'lg': {'min': '768px', 'max': '1023px'},
      'xl': {'min': '1024px', 'max': '1279px'},
      '2xl': {'min': '1280px'},
    },
    colors: {
      //main app color
      green: '#2D6A4F',
      gray: {
        100: '#F7FAFC',
        200: '#EDF2F7',
        300: '#E2E8F0',
        400: '#CBD5E0',
        500: '#A0AEC0',
        600: '#718096',
        700: '#4A5568',
        800: '#2D3748',
        900: '#1A202C',
      },
      white: '#FFFFFF',
      black: '#000000',
    },
    width: {
      '1242':'1242px',
      '555':'555px',
      '687': '687px'
    },
    height:{
      '425':'350px'
    },
    gridTemplateColumns: {
      'first-block':'687px 545px',
      '3':'repeat(3, minmax(0,1fr))',
      '2':'repeat(2, minmax(0,1fr))'
    }
  },
  plugins: [],
};
export default config;
