/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html", "./css/**/*.css"],
    theme: {
      extend: {
        colors: {
          crtGreen: '#00FF41',        // Classic green CRT text
          crtAmber: '#FFBF00',        // Amber CRT glow
          crtDark: '#001100',         // Dark background
          crtLight: '#AAFFAA',        // Lighter green glow
        },
        fontFamily: {
          crtMono: ['"VT323"', 'monospace'], // Pixelated CRT font, VT323 is good
        },
        keyframes: {
          flicker: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.85' },
            '70%': { opacity: '0.9' },
            '80%': { opacity: '0.8' },
          },
          scanline: {
            '0%, 100%': { backgroundPosition: '0 0' },
            '50%': { backgroundPosition: '0 2px' },
          },
        },
        animation: {
          flicker: 'flicker 3s infinite',
          scanline: 'scanline 7s linear infinite',
        },
        backgroundImage: {
          'crt-scanlines': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 3px)',
        },
      },
    },
    plugins: [],
  }
  