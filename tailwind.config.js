export default {
  content: [
    "./index.html",
    "./main.js",
    "./style.css",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade': 'fade 0.5s ease-in-out',
        'ripple': 'ripple 1s ease-out forwards',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}