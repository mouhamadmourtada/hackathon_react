/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // je veux définir une variable utilisable dans mon fichier tailwind
  theme : {
    extend : {
      colors : {
        'bleu_clair' : '#E9F1FA',
        'bleu_fonce' : '#00ABE4',
        'myWhite' : '#FFFFFF',

        "primaire" : '#E9F1FA',
        "secondaire" : "#00ABE4",
        "tertiaire" : "#F2F2F2",
      }
    }
  },

  plugins: [],
}

