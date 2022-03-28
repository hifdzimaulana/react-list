module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,jsx,ts,js}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'event-cards': 'repeat(auto-fit, minmax(250px, 1fr))'
      }
    },
  },
  plugins: [],
}
