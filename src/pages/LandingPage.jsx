import React from "react";
import { useAuth } from "../provider/authProvider";
import Layout from "../layout/Layout";
import LambForm from "../components/LambForm";
import Navbar from "../components/Navbar";
import Button from "../components/button";
import ProductCard from "../components/productCard";

//Exemple de links
const links = [
  { name: "Nos logements", href: "/" },
  { name: "A Propos", href: "/about" },
  { name: "Contact & Support", href: "/contact" },
  { name: "Publier mon logement", type: "btn", href: "/login" },
  { name: "Se connecter", type: "btn", href: "/register" },
  { src: "/logo.png", type: "img", href: "/profil" },
];

const produits = [
  {
    libelle: "Tomates",
    image: "url_vers_l'image1",
    produit_id: "123456",
    stock: 10,
    prixBase: 500,
    prixVente: 400,
    datePeremption: "2024-05-31",
    categorie_id: "cat123",
    vendeur_id: "vend123"
  },
  {
    libelle: "Pain frais",
    image: "url_vers_l'image2",
    produit_id: "789012",
    stock: 20,
    prixBase: 300,
    prixVente: 250,
    datePeremption: "2024-06-05",
    categorie_id: "cat456",
    vendeur_id: "vend456"
  },
  {
    libelle: "Fromage",
    image: "url_vers_l'image3",
    produit_id: "345678",
    stock: 5,
    prixBase: 1000,
    prixVente: 800,
    datePeremption: "2024-05-25",
    categorie_id: "cat789",
    vendeur_id: "vend789"
  }
];
const LandingPage = () => {


  return (
    // il faut mettre des bordure rouge très claire
    <div className=" flex flex-col ">
      <Navbar links={links} />
      {/* Hero section */}
      <div className="bg-[#064B4E] relative h-screen  flex justify-between h-full">
        <div className="  w-1/2 flex flex-col px-8 justify-center gap-8">

          <p className=" text-6xl font-bold text-jay_accent ">
            Ensemble contre le gaspillage alimentaire au Sénégal !
          </p>
          <span className="text-lg text-jay_accent ">Chaque achat que vous faites aide à réduire le gaspillage <br /> et soutient nos communautés locales.</span>
          <div className="w-1/2">
            <Button type="secondary" text={"Acheter Maintenant"} customStyle={"text-md"} />
          </div>
        </div>

        <div className=" flex items-center justify-center ">
          <img
            src={"../../images/imgfood2.png"}
            alt="Logo "

            width={"400"}
            height={"400"}
            className="object-cover "
          />
        </div>

      </div>
      {/* Products Section */}

      <div className=" bg-[#f3f4f5]  flex flex-col px-8 py-8 justify-center gap-8">

        <p className=" text-4xl font-bold text-jay_primary ">
          Nos produits
        </p>

        <div className="flex justify-center gap-4">
          {produits.map((produit, index) => (
            <ProductCard
              key={index}
              title={produit?.libelle}
              description={`Date de péremption: ${produit.datePeremption}`}
              price={produit.prixVente}
              vendeur={produit.vendeur_id}

            />
          ))}
        </div>

        <div className="w-1/2 self-center">
          <Button type="primary" text={"Voir plus"} customStyle={"text-md"} />
        </div>

      </div>
      {/* Sensibilisation Section */}
            



$

    </div>
  );
};
export default LandingPage;
