/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './about.html', // As you mentioned you have about.html
      './css/**/*.css', // Include all CSS files in the css folder (for @apply directives and @theme)
      // If you have JavaScript files where you dynamically add Tailwind classes,
      // ensure their paths are correct. For a simple HTML/CSS project,
      // you might not need the following line:
      // './src/**/*.{js,ts,jsx,tsx}',
    ],
    // The 'theme' object is now empty as your custom font, keyframes, and animations
    // are defined directly in your 'style.css' using the @theme directive.
    theme: {
      extend: {}, // Keep extend if you might add other JS-based theme customizations later
    },
    plugins: [],
  }
  