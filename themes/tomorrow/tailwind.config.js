/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{html,js}',
    './themes/tomorrow/layouts/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      tahoma: ['Tahoma', 'Tahoma-Bold', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
