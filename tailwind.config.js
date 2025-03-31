/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8B5CF6', // purple-500
          DEFAULT: '#7C3AED', // purple-600
          dark: '#6D28D9', // purple-700
        },
        secondary: {
          light: '#0EA5E9', // sky-500
          DEFAULT: '#0284C7', // sky-600
          dark: '#0369A1', // sky-700
        },
        accent: {
          light: '#10B981', // emerald-500
          DEFAULT: '#059669', // emerald-600
          dark: '#047857', // emerald-700
        },
        dark: {
          light: '#1E293B', // slate-800
          DEFAULT: '#0F172A', // slate-900
          dark: '#020617', // slate-950
        },
      },
      fontFamily: {
        sans: ['Inter var', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.primary.light), 0 0 20px theme(colors.primary.light)',
        'neon-secondary': '0 0 5px theme(colors.secondary.light), 0 0 20px theme(colors.secondary.light)',
      },
    },
  },
  plugins: [],
} 