module.exports = {
  content: [
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Courier-New': ['Courier New'],
      'Bell-MT': ['Bell-MT']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('postcss-100vh-fix')
  ],
}
