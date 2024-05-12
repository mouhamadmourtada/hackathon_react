import React, { useState } from "react";
import IndiquePage from "../components/IndiquePage";
import BreadCrumb from "../components/BreadCrumb";
import CartItem from "../components/CartItem";
import Button from "../components/button";
import { json } from "react-router-dom";

export default function Panier() {
  const [total, setTotal] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Fonction pour mettre à jour le total
  const updateTotal = (price, isChecked, product) => {
    if (isChecked) {
      setTotal(total + price);
      setSelectedProducts([...selectedProducts, product]);
    } else {
      setTotal(total - price);
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    }
  };

  return (
    <>
      <div className="mb-4">
        <BreadCrumb links={links} />
      </div>
      <IndiquePage className={"text-5xl"}>Votre panier</IndiquePage>
      <div className="flex flex-row gap-12">
        <div className="w-9/12">
          {data.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateTotal={updateTotal} // Passer la fonction de mise à jour du total
            />
          ))}
        </div>
        <div className="w-3/12 border rounded-2xl bg-primary text-accent mt-4 p-4 h-fit flex flex-col">
          <h2 className="text-xl mb-4">Commande</h2>
          <div className="flex flex-col gap-2">
            {selectedProducts.map((product) => (
              <div key={product.id} className="flex flex-row justify-between">
                <p>{product.name}</p>
                <p>{product.price} FCFA</p>
              </div>
            ))}
          </div>
          <hr />
            <p className="self-end my-4 text-2xl text-accent">{total} FCFA</p> {/* Afficher le total */}
          <Button text={"Commander"} type={"secondary"} onClick={()=>{alert(JSON.stringify(selectedProducts))}}/>
        </div>
      </div>
    </>
  );
}

const links = [
  {
    label: "Panier",
    lien: "/app/panier",
    icon: "HomeIcon",
  },
];

const data = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    quantity: 1,
    img: "/images/imgfood3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel elit sit amet dolor ultrices tincidunt. Nulla facilisi. Nullam auctor, libero sit amet ultricies fermentum, nunc metus varius libero, vel aliquam purus metus sed nunc. ",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    quantity: 1,
    img: "/images/imgfood4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel elit sit amet dolor ultrices tincidunt. Nulla facilisi. Nullam auctor, libero sit amet ultricies fermentum, nunc metus varius libero, vel aliquam purus metus sed nunc. ",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    quantity: 1,
    img: "/images/imgfood.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel elit sit amet dolor ultrices tincidunt. Nulla facilisi. Nullam auctor, libero sit amet ultricies fermentum, nunc metus varius libero, vel aliquam purus metus sed nunc. ",
  },
];
