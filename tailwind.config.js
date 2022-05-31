module.exports = {
  plugins: [require("flowbite/plugin")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "bits-green": "#3E6053",
        "bits-dark-green": "#003300",
        "bits-yellow": "#E0E39A",
        "bits-dark-yellow": "#D6D43E",
        "bits-red": "#BA2329",
      },
    },
  },
};
