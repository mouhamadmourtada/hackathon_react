import React from "react";
import { useAuth } from "../provider/authProvider";
import Layout from "../layout/Layout";
import LambForm from "../components/LambForm";
import { BarChart } from '@mui/x-charts/BarChart';



//Exemple de champs
const fields = [
  { type: "Input", name: "fullName", defaultValue: "",placeholder:"Nom Complet ",required: true },
  { type: "Date", name: "Birthday", defaultValue: "",placeholder:"Birthday ",required: true },

  { type: "Checkbox", name: "agree", defaultValue: false, required: true },
  { type: "Radio", name: "gender", defaultValue: "male", required: true, options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
  ]},
  {
      type: "Select",
      name: "country",
      options: [
          { label: "USA", value: "usa" },
          { label: "Canada", value: "canada" },
          { label: "UK", value: "uk" },
      ],
      required: true,
  },
  { type: "TextArea", name: "message", defaultValue: "", required: false },
  { type: "File", name: "Piece jointe", defaultValue: "", required: false },
];


const data = {
  labels: ['Catégorie 1', 'Catégorie 2', 'Catégorie 3'], // Noms des catégories
  datasets: [
    {
      label: 'Nombre de ventes',
      data: [300, 150, 200], // Nombre de ventes par catégorie
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)', // Couleur pour la catégorie 1
        'rgba(54, 162, 235, 0.5)', // Couleur pour la catégorie 2
        'rgba(255, 206, 86, 0.5)' // Couleur pour la catégorie 3
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1,
    },
  ],
};




const Dashboard = () => {
  const { setToken } = useAuth();

  const handleLogout = () => {
    localStorage.clear();
    setToken(null);
  };

 
 

  const onSubmit = (data) =>{ 
    console.log(data)
}


  

  return (
    // il faut mettre des bordure rouge très claire
    <div>
      <h1>Tableau de bord</h1>


        
      <div className="py-8 flex gap-8 justify-evenly ">
          <div className="h-32 w-1/4 bg-gradient-to-b from-green-50 to-bg-white text-jay_primary flex flex-col justify-evenly border border-gray-200  py-2 px-2 w-fit shadow-md">
            <div className="flex justify-between">

            <span className=" font-semibold text-lg text-jay_primary">Ventes</span>
            <img src="/images/analytics.gif" alt="Statistiques" srcset="" width={30} height={"auto"} className="rounded-full  " />

            </div>

              <div className="flex flex-col">

            <div className="flex justify-between items-center">

            <span className=" font-bold text-xl text-jay_primary">645982 FCFA</span>
            <span className=" font-bold text-xs text-cyan-500  animate-bounce">+4% ↑</span>
             </div>

            <span className="text-xs italic ">Comparé à l'année derniere (352035 FCFA) </span>
              </div>
          </div>
          {/* Achats */}
          <div className="h-32 w-1/4 bg-gradient-to-b from-blue-50 to-bg-white text-jay_primary flex flex-col justify-evenly border border-gray-200  py-2 px-2 w-fit shadow-md">
            <div className="flex justify-between">

            <span className=" font-semibold text-lg text-jay_primary">Achats</span>
            <img src="/images/analytics.gif" alt="Statistiques" srcset="" width={30} height={"auto"} className="rounded-full  " />

            </div>

              <div className="flex flex-col">

            <div className="flex justify-between items-center">

            <span className=" font-bold text-xl text-jay_primary">345000 FCFA</span>
            <span className=" font-bold text-xs text-red-500  animate-bounce">-2% ↓</span>
             </div>

            <span className="text-xs italic ">Comparé à l'année derniere (356000 FCFA) </span>
              </div>
          </div>
          
           {/* Benefices */}
           <div className="h-32 w-1/4 bg-gradient-to-b from-cyan-50 to-bg-white text-jay_primary flex flex-col justify-evenly border border-gray-200  py-2 px-2 w-fit shadow-md">
            <div className="flex justify-between">

            <span className=" font-semibold text-lg text-jay_primary">Bénéfices</span>
            <img src="/images/analytics.gif" alt="Statistiques" srcset="" width={30} height={"auto"} className="rounded-full  " />

            </div>

              <div className="flex flex-col">

            <div className="flex justify-between items-center">

            <span className=" font-bold text-xl text-jay_primary">1000000 FCFA</span>
            <span className=" font-bold text-xs text-cyan-500 animate-bounce">+12.5% ↑</span>
             </div>

            <span className="text-xs italic ">Comparé à l'année derniere (1250000 FCFA) </span>
              </div>
          </div>


          
      </div>

        <div className="flex justify-center">

      <BarChart
  xAxis={[
    {
      id: 'barCategories',
      data: ['Lundi', 'Mardi', 'Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
      scaleType: 'band',
      label:"Jours"
    },
  ]}
  series={[
    {
      data: [4, 2, 6,0,3,0,8],
      label:"Ventes journalières"
    },
  ]}
  width={600}
  height={300}
/>
  </div>

     
    </div>
  );
};
export default Dashboard;
