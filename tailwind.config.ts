module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // This will make sure that the dark mode uses the `.dark` class
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        border: 'var(--border)',
        // Add any other custom colors here
      },
    },
  },
  plugins: [],
};
