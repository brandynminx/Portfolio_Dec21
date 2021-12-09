module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'about-pattern': "url('/src/img/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
