/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary:"#0071E4",
      secondar:"#6FD91C",
      white:"#FFFFFF",
      grey:"#b7b7b7",
      hero_bg:"#D0EAFC",
      hero_text:"#1E3240",
      dark_gray:"#706E6E",
      shadow:"#0000000d",
      black:"#000000",
    },
    extend: {
      fontFamily:{
        display:["Noto Sans Display"]
      },
      container:{
        center:true,
        padding:"20px",
        screens:{
          lg:"1240px"
        }
      }
    },
  },
  plugins: [],
}