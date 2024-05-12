import React from "react";
import { useAuth } from "../provider/authProvider";
import Layout from "../layout/Layout";
import LambForm from "../components/LambForm";
const Dashboard = () => {
  const { setToken } = useAuth();

  const handleLogout = () => {
    localStorage.clear();
    setToken(null);
  };

 

  const onSubmit = (data) =>{ 
    console.log(data)
}
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

  

  return (
    // il faut mettre des bordure rouge très claire
    <div>
      <h1>Dashboard</h1>

      <div className="py-4 mx-auto w-1/2">
        <LambForm fields={fields} onSubmit={onSubmit} submitText={"Enregistrer"} formTitle={"Formulaire"}/>
      </div>

      <button className="btn btn-primary" onClick={handleLogout}>
        Se déconnecter
      </button>
    </div>
  );
};
export default Dashboard;
