/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forge: '#133125',
        signal: '#C7E0CC',
        livewire: '#DF3F79',
        field: '#F5F0E8',
        ink: '#1A1A1A',
        muted: '#6B6862'
      },
      fontFamily: {
        serif: ['Caesura', 'Bodoni Moda', 'Playfair Display', 'Didot', 'Georgia', 'serif'],
        sans: ['Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk Display', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      },
      maxWidth: {
        content: '68rem',
        prose: '42rem'
      }
    }
  },
  plugins: []
};
