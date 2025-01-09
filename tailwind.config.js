/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ], theme: {
     extend: {
       keyframes: {
         fadeIn: {
           "0%": { opacity: "0", transform: "translateY(20px)" },
           "100%": { opacity: "1", transform: "translateY(0)" },
         },
         bounceOnce: {
           "0%": { transform: "scale(1)" },
           "50%": { transform: "scale(1.1)" },
           "100%": { transform: "scale(1)" },
         },
       },
       animation: {
         "fade-in": "fadeIn 1s ease-out forwards",
         "bounce-once": "bounceOnce 0.5s ease-in-out forwards",
       },
     },
     
   },
   plugins: [],
 }
 
 