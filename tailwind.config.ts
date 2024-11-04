import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'Beign': '#B59668',
        'Turquoise': '#5BB2B3',
        'Brown': '#5F3813',
      },
      fontFamily: {
        'all-round-gothic': ['var(--font-all-round-gothic)'],
        'ge-ss-two': ['var(--font-ge-ss-two)'],
        'adelle': ['var(--font-adelle-sans)'],
        'adelle-ara': ['var(--font-adelle-sans-ara)'],
        'adelle-condensed': ['var(--font-adelle-sans-condensed)'],
      },
      screens: {
        'xxs': '333px',
        'xs': '433px',
      },
    },
  },
  plugins: [],
};
export default config;
