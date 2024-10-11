/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'bluish-purple': '#6B3CC9',
        'yuzu-jam': '#F28D35',
        'ice-ice-baby': '#6A44F2',
        'rich-blue': '#1CBDDD',
        'electric-indigo': '#52378C',
        'interstellar-blue-light': '#78BF91',
        'interstellar-blue-dark': '#4DCA79',
        'tricorn-black': '#2F2F2F',
        'acier': '#545A75',
        'wizard-white': '#E2F2FE',
        'cuddyl-yarn': '#FFF8E0',
        'hornet-sting': '#FF0335',
        'frog': '#5EB30B',
        'faqcolor': '#6F6C90',
        'faqbg': '#FAF8FF',
      },
      screens: {
        'sm': '375px',
        // => @media (min-width: 375px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1200px',
        // => @media (min-width: 1200px) { ... }
  
        'xl': '1440px',
        // => @media (min-width: 1440px) { ... }
      }
    },
  },
  plugins: [],
}

