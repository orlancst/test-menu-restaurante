/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ['Montserrat', 'sans-serif'],
        "gillSans": ["Gill Sans", "sans-serif"],
      },
      boxShadow: {
        "superior": '0 -4px 20px 0px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light",
      {
        byhours: {
          "primary": "#ff5800",
          "secondary": "#ffffff",
          "accent": "#331c54",
          "neutral": "#4f0b7b",
          "base-100": "#331c54",
          "info": "#00ffff",
          "success": "#331c54",
          "warning": "#cd6a00",
          "error": "#cf0042",
        },
        carpediem: {
          "primary": "#df0067",
          "secondary": "#ffffff",
          "accent": "#000000",
          "neutral": "#7a142a",
          "base-100": "#4f0b7b",
          "info": "#00ffff",
          "success": "#00b500",
          "warning": "#cd6a00",
          "error": "#cf0042",
        },
      }
    ],
  },
}

