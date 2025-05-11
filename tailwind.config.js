module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure this matches your file structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), // Ensure this plugin is included
  ],
};
