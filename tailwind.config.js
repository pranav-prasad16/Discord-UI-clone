module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      ginto: ['Ginto Nord','Poppins','Sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
