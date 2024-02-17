/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        maxWidth: {
          container: '1170px',
        },
        colors: {
          primary: '#1DD100FF',
          btn: '#1DD100FF',
          overlay: '#4D4D4D',
          secondary: '#263238',
          common: '#FFFFFF',
          silver: '#F5F7FA',
          color: 'text-gray-900',
          para: '#717171',
          icon: '#103E13'
        },
        fontFamily: {
            raleway: ["Raleway", 'sans-serif'],
            inter: ["Inter", 'sans-serif'],
          
        },
        
      },
    },
    plugins: [],
  }