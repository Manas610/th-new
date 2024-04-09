/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'four': '0px 0px 10px -2px rgba(0,0,0,0.06), 0px 6px 10px 10px rgba(0,0,0,0.04)',
      },
      colors: {
        blue: {
          dark: '#387fc8',
          light: '#d7e5f4',
          second: '#5f98d3'
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
