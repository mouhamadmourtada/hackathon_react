import React from "react";
import { useAuth } from "../provider/authProvider";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Navbar from "../components/Navbar";
import Button from "../components/button";
import ProductCard from "../components/productCard";
import { FaBowlFood } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import LambForm from "../components/LambForm";
import { useRef, useEffect } from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useNavigate } from "react-router-dom";




//Exemple de links
const links = [
  { name: "Accueil", href: "/" },
  { name: "Contact & Support", href: "/contact" },
  { name: "Mon Panier", href: "/about" },
  { name: "Devenir Vendeur", type: "btn", href: "/login" },
  { name: "Se connecter", type: "btn", href: "/register" },
  { src: "/Yamale.png", type: "img", href: "/profil" },
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
//fields
const fields = [
  { type: "Input", name: "Prénom", defaultValue: "",placeholder:"Prenom ",required: true },
  { type: "Input", name: "Nom", defaultValue: "",placeholder:"Nom ",required: true },
  { type: "Input", name: "Adresse", defaultValue: "",placeholder:"Adresse ",required: true },  
];



const LandingPage = () => {
const navigator = useNavigate()
  const onSubmit = (data) =>{
    console.log(data);
  }
  //Animations
  useEffect(() => {
    // Activer le plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const text = "Au niveau mondial, 43% à peine des fruits et légumes produits sont consommés. Les 57% restants sont gaspillés!";
    let currentText = "";
    const typingSpeed = 0.05; // Vitesse de frappe (en secondes par caractère)

    //Text Left
    gsap.fromTo(".leftHero", {
      x: -100, // Déplacement depuis la gauche
      opacity: 0 // Opacité initiale
    }, {
      x: 0, // Retour à la position initiale
      opacity: 1, // Opacité finale
      duration: 2, // Durée de l'animation
      ease: "power4.out", // Type d'animation
      scrollTrigger: {
        trigger: ".leftHero",
        start: "top 80%", // Début de l'animation lorsque le haut de l'élément est à 80% de la fenêtre
        end: "top 20%", // Fin de l'animation lorsque le haut de l'élément est à 20% de la fenêtre
        toggleActions: "play none none reverse" // Animation se joue une fois en montant et se reverse en descendant
      }
    });
    //Text right
    gsap.fromTo(".rightHero", {
      rotate:40,
      x: 100, // Déplacement depuis la gauche

      opacity: 0 // Opacité initiale
    }, {
      rotate:0,

      x:0,
      opacity: 1, // Opacité finale
      duration: 2, // Durée de l'animation
      ease: "power4.out", // Type d'animation
      scrollTrigger: {
        trigger: ".rightHero",
        start: "top 80%", // Début de l'animation lorsque le haut de l'élément est à 80% de la fenêtre
        end: "top 20%", // Fin de l'animation lorsque le haut de l'élément est à 20% de la fenêtre
        toggleActions: "play none none reverse" // Animation se joue une fois en montant et se reverse en descendant
      }
    });
    //Title
    gsap.fromTo(".title", {
      y: -200, // Déplacement depuis la gauche

      opacity: 0 // Opacité initiale
    }, {
      y:0,
      opacity: 1, // Opacité finale
      duration: 2, // Durée de l'animation
      ease: "power4.out", // Type d'animation
      scrollTrigger: {
        trigger: ".title",
        start: "top 80%", // Début de l'animation lorsque le haut de l'élément est à 80% de la fenêtre
        end: "top 20%", // Fin de l'animation lorsque le haut de l'élément est à 20% de la fenêtre
        toggleActions: "play none none reverse" // Animation se joue une fois en montant et se reverse en descendant
      }
    });
    //Products
    gsap.fromTo('.product', {
      opacity: 0,
  },{
    opacity:1,
    stagger: 0.4, 
    duration:1,
    scrollTrigger: {
      trigger: ".product",
      start: "top 80%", // Début de l'animation lorsque le haut de l'élément est à 80% de la fenêtre
      end: "top 20%", // Fin de l'animation lorsque le haut de l'élément est à 20% de la fenêtre
      toggleActions: "play none none reverse" // Animation se joue une fois en montant et se reverse en descendant
    }
  });

//typing animation
 // Créer une fonction pour simuler l'effet de frappe
 const typeText = () => {
  for (let i = 0; i <= text.length; i++) {
    setTimeout(() => {
      currentText = text.substring(0, i);
      document.querySelector('.typing').textContent = currentText;
    }, i * typingSpeed * 500);
  }
}
    // Lancer l'animation de frappe lorsque l'utilisateur atteint un certain point de la page
    ScrollTrigger.create({
      trigger: ".trigger", // Déclencheur pour l'animation de frappe
      start: "top 80%", // Début de l'animation lorsque le haut de l'élément est à 80% de la fenêtre
      onEnter: () => {
        typeText(); // Lancer l'animation de frappe lorsque l'utilisateur atteint le point spécifié
      }
    });

  }, []);
  return (
    // il faut mettre des bordure rouge très claire
    <div className=" flex flex-col ">
      <Navbar links={links} />
      {/* Hero section */}
      <div className="bg-[#064B4E] relative h-screen  flex justify-between h-full">
        <div className="leftHero  w-1/2 flex flex-col px-8 justify-center gap-8">

          <p className="  text-6xl font-bold text-jay_accent ">
            Ensemble contre le gaspillage alimentaire au Sénégal !
          </p>
          <span className="text-lg text-jay_accent ">Chaque achat que vous faites aide à réduire le gaspillage <br /> et soutient nos communautés locales.</span>
          <div className="w-1/2">
            <Button type="secondary" text={"Commencer à Acheter"} customStyle={"text-md"} onClick={()=>navigator("/register", { replace: true })} />
          </div>
        </div>

        <div className=" rightHero flex items-center justify-center ">
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

      <div className=" bg-[#f3f4f5]  flex flex-col px-8 py-12 justify-center gap-8">

        <p className=" title text-4xl font-bold flex items-center gap-2 text-jay_primary ">
          <span className="">
            Nos produits
            </span>
          <FaBowlFood  />

        </p>

        <div className="flex justify-center gap-24">
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
          <Button type="primary" text={"Voir plus"} customStyle={"text-md"} onClick={()=>Navigate()} />
        </div>

      </div>

      {/* Sensibilisation Section */}

      <div className=" bg-[#fff]  flex flex-col px-8 py-12 justify-center gap-8">

      <p className="title text-4xl font-bold flex items-center gap-2 text-jay_primary ">
          <span>
            Sensibilisation
            </span>
          <FaHandHoldingHeart  />

        </p>

        <div className=" trigger flex items-center justify-between  ">
          <p className="typing text-5xl ">
            Au niveau mondial, <span className="font-bold">43%</span>  à peine des fruits et légumes produits sont consommés. <br/> Les <span className="font-bold">57%</span> restants sont gaspillés!
            <span className="text-gray text-xs block py-4 italic">Source: FAO, 31 oct. 2012</span>
          </p>
          <img src="/images/analytics.gif" alt="Statistiques" srcset="" width={400} height={"auto"} />
            
        </div>

        <div className="w-1/2 self-center flex flex-col gap-2 ">
        <span className="text-center text-xl text-center italic text-jay_secondary">Vous voulez participer a la lutte?</span>
          <Button type="primary" text={"Nous Rejoindre"} customStyle={"text-md"} onClick={()=>Navigate()} />
        </div>

      </div>
         {/* Contact Section */}

         <div className=" bg-green-50  flex flex-col px-8 py-12 justify-center gap-8">

<p className=" text-4xl font-bold flex items-center gap-2 text-jay_primary ">
    <span>
      Contactez nous
      </span>
    <GrContact />

  </p>

  <div className="flex items-center justify-between  ">
    <img src="/images/agenda.gif" alt="Statistiques" srcset="" width={400} height={"auto"} />


    <div className="w-1/2">

      <LambForm fields={fields} onSubmit={onSubmit} submitText={"Enregistrer"} formTitle={"Contacts"}/>
    </div>

      
  </div>

</div>





        <div className="flex items-center justify-center bg-white w-full py-4 border-t shadow-md text-center text-xs font-bold">© All rights reserved,ESP 6 2024</div>

    </div>
  );
};
export default LandingPage;
