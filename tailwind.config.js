/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50:'#eef4ff',100:'#dbe7ff',200:'#bdd2ff',300:'#8eb2ff',
          400:'#5a89ff',500:'#3865f5',600:'#2549db',700:'#1d3aaf',
          800:'#1d348a',900:'#1e306e',
        },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        glow: { '0%,100%': { boxShadow: '0 0 20px rgba(99,102,241,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(99,102,241,0.6)' } },
      },
    },
  },
  plugins: [],
};
