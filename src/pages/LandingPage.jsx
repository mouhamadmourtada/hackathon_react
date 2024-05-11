import React from "react";
import { useAuth } from "../provider/authProvider";
import Layout from "../layout/Layout";
import LambForm from "../components/LambForm";
import Navbar from "../components/Navbar";
import Button from "../components/button";
const LandingPage = () => {
  
//Exemple de links
const links = [
    { name: "Nos logements", href: "/" },
    { name: "A Propos", href: "/about" },
    { name: "Contact & Support", href: "/contact" },
    { name: "Publier mon logement", type: "btn", href: "/login" },
    { name: "Se connecter", type: "btn", href: "/register" },
    { src: "/logo.png", type: "img", href: "/profil" },
];
  

  return (
    // il faut mettre des bordure rouge très claire
    <div className="h-screen  flex flex-col ">
            <Navbar links={links} />
            {/* Hero section */}
            <div className="bg-[#064B4E] relative  flex justify-between h-full">
              <div className="  w-1/2 flex flex-col px-8 justify-center gap-8">

                  <p className=" text-6xl font-bold text-jay_accent ">
                    Ensemble contre le gaspillage alimentaire au Sénégal ! 
                  </p>
                    <span className="text-lg text-jay_accent ">Chaque achat que vous faites aide à réduire le gaspillage <br/> et soutient nos communautés locales.</span>
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
                <div className="absolute w-full h-24 bottom-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,288L80,245.3C160,203,320,117,480,74.7C640,32,800,32,960,69.3C1120,107,1280,181,1360,218.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
            </div>
            {/* Products Section */}
            
          

          

      

      
    </div>
  );
};
export default LandingPage;
