import IndiquePage from "../components/IndiquePage";
import RecipeCard from "../components/RecipeCard";
import Button from "../components/button";
import { useNavigate, Link } from "react-router-dom";

export default function Recettes() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="flex flex-row justify-between">
          <div>
            <IndiquePage
              children={"Nos Recettes"}
              className={"text-3xl mb-4"}
            />
          </div>
          <div>
            <Button
              text={"Génerer une recette"}
              type={"primary"}
              customStyle={"w-24"}
              onClick={() => {
                navigate("/app/recette/genererRecette", { replace: true });
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-12">
          {recettes.map((recette) => (
            <RecipeCard
              cookTime={recette.tempsPreparation}
              title={recette.nom}
              image={recette.photo}
              description={recette.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// Générer un tableau contenant des recettes structurées comme suit : une photo, un nom, un brève description, un temps de préparation
const recettes = [
  {
    nom: "Thieboudienne",
    photo: "/images/thiebouDjeune.jpg",
    description:
      "Plat traditionnel sénégalais à base de riz, de poisson et de légumes.",
    tempsPreparation: "2 heures",
  },
  {
    nom: "Yassa Poulet",
    photo: "/images/yassaPoulet.jpg",
    description:
      "Poulet mariné dans une sauce à base d'oignons, de citron et de moutarde.",
    tempsPreparation: "1 heure",
  },
  {
    nom: "Mafe",
    photo: "/images/mafe.jpg",
    description:
      "Ragoût sénégalais à base de viande (généralement du bœuf ou de l'agneau) et de sauce d'arachide.",
    tempsPreparation: "1 heure 30 minutes",
  },
  {
    nom: "Dibi",
    photo: "/images/dibi.jpg",
    description:
      "Brochettes de viande (souvent de l'agneau) marinées et grillées, servies avec une sauce pimentée.",
    tempsPreparation: "1 heure",
  },
  {
    nom: "Souloukhou",
    photo: "/images/souloukhou.jpg",
    description:
      "Plat traditionnel sénégalais à base de riz, de poisson et de légumes.",
    tempsPreparation: "2 heures",
  },
  {
    nom: "Soupou Kandia",
    photo: "/images/soupouKandia.jpg",
    description: "Soupe sénégalaise épicée à base de poisson et de légumes.",
    tempsPreparation: "2 heures",
  },
  {
    nom: "Domoda",
    photo: "/images/domoda.jpg",
    description:
      "Plat sénégalais à base de viande (généralement du bœuf ou du poulet) et de sauce d'arachide.",
    tempsPreparation: "2 heures",
  },
  {
    nom: "Fouti",
    photo: "/images/fouti.jpg",
    description:
      "Plat traditionnel sénégalais à base de riz, de poisson et de légumes.",
    tempsPreparation: "2 heures",
  },
];
