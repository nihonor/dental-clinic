/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        btncolor:'#FC724D',
        primary:"#B888F8",
       
        secondary:"#26335D",
        department:"#FFF0E9",
        backText:"#737373",
        textColor:"#252B42",
        boldColor:"#BDBDBD",
        blueMoney:"#0061FF",
        saleBtn:"#E74040",
        bgFooter:"#FAFAFA"
      },
      fontFamily:{
        monteserat:["Montserrat", 'sans-serif']
      }
    },
  },
  plugins: [],
}

