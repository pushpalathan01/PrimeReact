/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content:  [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/primereact/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


  
//   The tailwind.config.js file is the configuration file for Tailwind CSS. It allows you to customize Tailwind's default settings based on your project needs.
// why tailwnd css
// Custom Theme Settings – Extend Tailwind’s default colors, spacing, fonts, etc.
// Scan Only Required Files – Improves performance by scanning only the necessary files.
// Enable Dark Mode – Define how dark mode should work in your project.
// Add Plugins – Include extra Tailwind plugins for additional functionality.
