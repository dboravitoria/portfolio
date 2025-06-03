/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primaryDark: '#790101',
        secondaryDark:'#040616',
        primaryLight: '#c12727',
        secondaryLight: '#bdd5ea',
        white: '#faebd0',
      },
      fontFamily: {
        primary: ["JetBrains Mono", 'monospace'],
        secondary: ["Space Grotesk", 'sans-serif']
      },
       boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}

