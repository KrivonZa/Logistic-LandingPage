/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#005cb8",
        secondary: "#FF712C",
        subtle: "#00b3d6",
        tertiary: "#03045e",
      },
    },
  },
  plugins: [],
};
