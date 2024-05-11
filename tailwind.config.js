/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // je veux définir une variable utilisable dans mon fichier tailwind
  theme : {
    extend : {
      backgroundImage: {
        'registerBackground': "url('/images/registerImage1.jpg')",
      },
      colors : {
        'bleu_clair' : '#E9F1FA',
        'bleu_fonce' : '#00ABE4',
        'myWhite' : '#FFFFFF',
        'jay_primary':'#064B4E',
         'jay_secondary':"#9DBC98", 
         'jay_tertiary':"#9DBC98", 
         'jay_accent':'#FAF4DF',
        "primaire" : '#E9F1FA',
        "secondaire" : "#00ABE4",
        "tertiaire" : "#F2F2F2",

        'primary':'#064B4E',
        'secondary':"#9DBC98", 
        'tertiary':"#9DBC98", 
        'accent':'#FAF4DF',
      }
    }
  },

  plugins: [
    require('daisyui'),
  ],
}

