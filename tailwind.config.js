/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: '#eef6ff',
            100: '#d9ebff',
            200: '#bcdbff',
            300: '#8ec4ff',
            400: '#58a1ff',
            500: '#2f7eff',
            600: '#0056b3', // Main primary blue from reference
            700: '#004899', // Darker royal blue
            800: '#063a78',
            900: '#062855', // Deep navy
            950: '#031733',
          },
          gold: {
            50: '#fdfaf0',
            100: '#fbf3dc',
            200: '#f7e4b2',
            300: '#f1cf7e',
            400: '#eab447',
            500: '#e59a20', // Main reference amber/gold
            600: '#cc7d16',
            700: '#aa5c14',
            800: '#894816',
            900: '#713c16',
          },
          navy: {
            800: '#0c2240',
            900: '#07182c',
            950: '#030c17',
          }
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        arabic: ['"Amiri"', '"Scheherazade New"', 'serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 40, 85, 0.08)',
        'card-hover': '0 12px 32px -4px rgba(0, 40, 85, 0.16)',
        'glow': '0 0 25px rgba(229, 154, 32, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
