/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#00ff88',
          blue: '#00d4ff',
        },
        dark: {
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#3a3a3a',
        }
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(0, 255, 136, 0.3)',
        'neon-green-lg': '0 0 30px rgba(0, 255, 136, 0.4)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
      }
    },
  },
  plugins: [],
}