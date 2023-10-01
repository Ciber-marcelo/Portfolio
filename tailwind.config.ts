import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif']
    },
    extend: {
      colors: {
        color1text: 'rgb(34 211 238 / var(--tw-text-opacity))', //text-cyan-400
        color1bg: 'rgb(22 78 99 / 0.8)', //bg-cyan-900/80
        color2bg: 'rgb(8 145 178 / var(--tw-bg-opacity))',//bg-cyan-600
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace']
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgba(8, 145, 178, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config
