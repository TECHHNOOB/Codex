import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { burner: { bg: '#0A0A0A', surface: '#111111', accent: '#FF4C00', text: '#F5F5F5', muted: '#888888', border: '#1F1F1F' } },
      fontFamily: { display: ['var(--font-display)'], sans: ['var(--font-inter)'] },
      boxShadow: { glow: '0 0 80px rgba(255,76,0,.18)' },
      backgroundImage: { 'radial-burn': 'radial-gradient(circle at center, rgba(255,76,0,.22), transparent 45%)' }
    },
  },
  plugins: [],
};
export default config;
