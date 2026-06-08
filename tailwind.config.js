/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PP Neue Montreal', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'serif-accent': ['PP Mondwest', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatFadeOut: {
          '0%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
          '100%': { opacity: '0', transform: 'translate(-50%, -60%) scale(0.85)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 10s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float-fade-out': 'floatFadeOut 1000ms ease-out forwards',
      },
    },
  },
  plugins: [],
}
