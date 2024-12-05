/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',                 // Include the main HTML file
     './src/**/*.{js,jsx,ts,tsx}',   // Include all JSX and TSX files
  ],
  theme: {
    extend: {
      backgroundColor: ["active"],  // Extend active background color
    },
  },
  plugins: [], // Add Tailwind plugins here if needed
};
