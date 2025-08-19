import type {Config} from "tailwindcss"
import scrollbar from 'tailwind-scrollbar'

const config: Config ={ 
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/images/hero.png')",
      }
    },
  },
  plugins: [
    scrollbar
  ],
}

export default config;