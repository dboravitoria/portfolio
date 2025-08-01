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
        primaryDark: '#AA2132',
        secondaryDark:'#040616',
        primaryLight: '#d6838c',
        secondaryLight: '#bdc8d3',
        intermediarie: '#bc4749', 
        white: '#faebd0',
      },
      fontFamily: {
        primary: ["JetBrains Mono", 'monospace'],
        secondary: ["Space Grotesk", 'sans-serif'],
        nunito: ["Nunito", 'sans-serif']
      },
       boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.6)',
      },
      dropShadow:{
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
        'dark': '0 0 12px #AA2132',
        'light': '0 0 12px #040616',
      },
       keyframes: {
    typing: {
      '0%': { width: '0%' },
      '70%': { width: '50%' },
    },
    'blink-caret': {
      'from, to': { borderColor: 'transparent' },
      '50%': { borderColor: 'intermediarie' },
    },
  },
  animation: {
    typing: 'typing 3s steps(100, end)',
    'blink-caret': 'blink-caret 2s step-end',
  },
  },
  plugins: [],
}
}
