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
      // colors: {
      //   color1text: '#22d3ee', //text-cyan-400
      //   color1bg: '#164e63', //bg-cyan-900
      //   color2bg: '#0891b2',//bg-cyan-600
      //   color3bg: '#083344', //bg-cyan-950
      // },
      colors: {
        color1text: '#a78bfa', //text-violet-400
        color1bg: '#4c1d95', //bg-violet-900
        color2bg: '#7c3aed',//bg-violet-600
        color3bg: '#2e1065', //bg-violet-950
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
