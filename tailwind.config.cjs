/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryPurple": "#7c5dfa",
        "primaryPurples-Ligher": "#9277ff",
        "darkBlue": "#1e2139",
        "darkerBlue": "#141625",
        "darkTextGray": "#dfe3fa",
  
        "lightDarkBlue": "#373b53",
        "lightGray": "#f8f8fb",
        "lightTextGray": "#767b99"
      }
    }
  },
  plugins: [],
  darkMode: 'class',
}
