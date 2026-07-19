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
          primary: '#304830',
          primaryDark: '#1b2b1b',
          primaryLight: '#4a684a',
          secondary: '#304838',
          accent: '#385830',
          bg: '#fcfdfc',
          surface: '#f4f6f4',
          muted: '#8b9a8b',
          border: '#e2e8e2',
          success: '#388e3c',
          warning: '#f57c00',
          textPrimary: '#1a261a',
          textSecondary: '#405040',
          textMuted: '#708070',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      borderRadius: {
        'card-sm': '16px',
        'card-md': '24px',
        'card-lg': '32px',
        'card-xl': '48px',
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(48, 72, 48, 0.08)',
        'premium-lg': '0 20px 40px -15px rgba(48, 72, 48, 0.12)',
        'premium-xl': '0 30px 60px -20px rgba(48, 72, 48, 0.16)',
        'glass': '0 8px 32px 0 rgba(48, 72, 48, 0.06)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
