import { useEffect, useState } from "react";
import LambForm from "../components/LambForm";
import useAxios from "../Hook/useAxios";
import Loader from "../components/Loader";
import { useNavigate, Link } from 'react-router-dom';
// import meta

export default function VendreUnProduit() {

  const [categories, setCategories] = useState([]);
  const [produits, setProduits] = useState([]);
  const [fields2, setFields2] = useState(fields);
  const navigate = useNavigate();

  // il nous un autre useAxios pour poster le produit
  
  const {responseAxios: responseAxios2, error: error2, loading: loading2, fetchData: fetchData2 } = useAxios({
    url : 'http://localhost:8001/api/produitVentes',
    method : "POST",
    // body : null,
    headers : {
      "Content-type" : "multipart/form-data"
    }
  })
  
  const {responseAxios: responseAxios1, error: error1, loading: loading1, fetchData: fetchData1 } = useAxios({
    url : 'http://localhost:8001/api/produits',
    method : "GET",
    // body : null,
    headers : {
      // on doit envoyer un fichier donc il faut mettre un mutipart/form-data
      "Content-type" : "application/json"
    }
  })
  
  const onSubmit = (data) => {
    const body = new FormData();
    body.append("libelle", data["Nom"]);
    body.append("description", data.Description);
    body.append("datePremption", data["Date de péremption"]);
    // body.append("stock", data["Quantité"]);
    body.append("stock", parseInt(data["Quantité"])); // il faut parser en int
    // body.append("prixBase", data["Prix de base (en FCFA)"]); il faut parser en int
    body.append("prixBase", parseInt(data["Prix de base (en FCFA)"]));
    // body.append("prixVente", data["Prix de vente (en FCFA)"]);
    body.append("prixVente", parseInt(data["Prix de vente (en FCFA)"]));
    body.append("categorie_id", data["Catégorie"]);
    body.append("produit_id", data["Types de produits"]);
    body.append("vendeur_id", localStorage.getItem("id"));
    body.append("image", data["Ajouter une image du produit"]);
    // console.log(body)
    
    fetchData2(body)
    
  }

  const {responseAxios, error, loading, fetchData } = useAxios({
    url : 'http://localhost:8001/api/categories',
    method : "GET",
    // body : null,
    headers : {
        "Content-type" : "application/json"
    }
  })
  useEffect( () => {
    fetchData()
    fetchData1()
  } , []);
  useEffect(() => { 
    if(responseAxios){
      setCategories(responseAxios.data)
      let newFields = fields2.map((field) => {
        if(field.name === "Catégorie"){
          field.options = responseAxios.data.map((category) => {
            return {label: category.libelle, value: category.id}
          })
          return field
        }
        return field
      })

      setFields2(newFields)
    }
  } , [responseAxios])
  useEffect(() => {
    if(responseAxios1){
      setProduits(responseAxios1.data)
      let newFields = fields2.map((field) => {
        if(field.name === "Types de produits"){
          field.options = responseAxios1.data.map((produit) => {
            return {label: produit.libelle, value: produit.id}
          })
          return field
        }
        return field
      })

      setFields2(newFields)
    }
  }, [responseAxios1]);
  useEffect(() => { 
    console.log("demouma")
    console.log(responseAxios2)
    if(responseAxios2?.status == 201){
      navigate("/app/todos", { replace: true });
    }
  } , [responseAxios2])

  
  return(
    <>
      <div>
        {
          loading2 && <Loader/>
        }
        <div className="py-4 mx-auto w-1/2">
          <LambForm fields={fields2} onSubmit={(data)=>{
            onSubmit(data);
          }} submitText={"Enregistrer"} formTitle={"Vendre un produit"}/>
        </div>

      </div>
    </>
  )
}
const fields = [
  {
    type: "Select",
    name: "Catégorie",
    options: [
        { label: "Selectionner une catégorie", value: null },
        // { label: "Fruits et Légumes", value: "fl" },
        // { label: "Produits laitiers", value: "pl" },
        // { label: "Viande ou Poisson", value: "vp" },
        // { label: "Céréales et légumineuses", value: "cl" },
        // { label: "Produits pour nourrissons", value: "pn" },
        // { label: "Autres", value: "o" },
    ],
    required: true,
  },
  {
    type: "Select",
    name: "Types de produits",
    options: [
        { label: "Selectionner une catégorie", value: null },
        // { label: "Fruits et Légumes", value: "fl" },
        // { label: "Produits laitiers", value: "pl" },
        // { label: "Viande ou Poisson", value: "vp" },
        // { label: "Céréales et légumineuses", value: "cl" },
        // { label: "Produits pour nourrissons", value: "pn" },
        // { label: "Autres", value: "o" },
    ],
    required: true,
  },
  { type: "Input", name: "Nom", defaultValue: "",placeholder:"Pot de tomate Podor ",required: true },
  { type: "TextArea", name: "Description", defaultValue: "", required: false,placeholder:"Pot de tomate Podor, onctueuse et délicieuse, 100% naturelle, sans conservateur ni colorant."},
  { type: "Date", name: "Date de péremption", defaultValue: "",placeholder:"27/12/27 ",required: true },
  { type: "Number", name: "Quantité", defaultValue: "",placeholder:"",required: true },
  { type: "Number", name: "Prix de base (en FCFA)", defaultValue: "",placeholder:"5000 ",required: true },
  { type: "Number", name: "Prix de vente (en FCFA)", defaultValue: "",placeholder:"5000 ",required: true },
  
  { type: "File", name: "Ajouter une image du produit", defaultValue: "", required: false },
];

