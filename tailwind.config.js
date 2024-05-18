/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cart-2": "url('../assets/home/desktop/image-speaker-zx7.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
