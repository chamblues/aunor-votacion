module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', 'node_modules/@zach.codes/react-calendar/dist/**/*.js'],
  //darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... } 

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
  corePlugins: {
    maxWidth: false,
    objectFit: false,
  }
}
