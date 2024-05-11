import LambForm from "../components/LambForm";
export default function VendreUnProduit() {
  return(
    <>
      <div>
        <div className="py-4 mx-auto w-1/2">
          <LambForm fields={fields} onSubmit={()=>{
            alert("Produit enregistré avec succès");
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
        { label: "Selectionner une catégorie", value: "fl" },
        { label: "Fruits et Légumes", value: "fl" },
        { label: "Produits laitiers", value: "pl" },
        { label: "Viande ou Poisson", value: "vp" },
        { label: "Céréales et légumineuses", value: "cl" },
        { label: "Produits pour nourrissons", value: "pn" },
        { label: "Autres", value: "o" },
    ],
    required: true,
},
  { type: "Input", name: "Nom", defaultValue: "",placeholder:"Pot de tomate Podor ",required: true },
  { type: "TextArea", name: "Description", defaultValue: "", required: false,placeholder:"Pot de tomate Podor, onctueuse et délicieuse, 100% naturelle, sans conservateur ni colorant."},
  { type: "Date", name: "Date de péremption", defaultValue: "",placeholder:"27/12/27 ",required: true },
  { type: "Input", name: "Quantité", defaultValue: "",placeholder:"25kg/1.5l",required: true },
  { type: "Number", name: "Prix de base (en FCFA)", defaultValue: "",placeholder:"5000 ",required: true },
  { type: "Number", name: "Prix de vente (en FCFA)", defaultValue: "",placeholder:"5000 ",required: true },
  
  { type: "File", name: "Ajouter une image du produit", defaultValue: "", required: false },
];

