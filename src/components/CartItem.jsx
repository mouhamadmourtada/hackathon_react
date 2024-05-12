import React, { useState } from "react";
import IconButton from "./IconButton";

export default function CartItem({ item, updateTotal }) {
  const [isChecked, setIsChecked] = useState(false);

  // Fonction pour gérer le changement de l'état de la case à cocher
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    updateTotal(item.price, !isChecked, item); // Mettre à jour le total en fonction de l'état de la case à cocher
  };

  return (
    <>
      <div className="flex flex-row p-8 border mt-4 gap-8 items-center justify-between h-72 bg-white rounded-2xl">
        <input
          type="checkbox"
          defaultChecked={isChecked}
          onChange={handleCheckboxChange} // Gérer le changement de l'état de la case à cocher
          className="checkbox"
        />
        <div className="w-96">
          <img src={item.img} alt="product image" className="rounded-xl" />
        </div>
        <div className="h-full flex flex-col ">
          <h2 className="text-xl">{item.name}</h2>
          <p className="text-sm font-extralight mt-5">{item.description}</p>
          <div className="flex items-end h-full">
            <p className="">Prix: {item.price} FCFA</p>
          </div>
        </div>
        <div className="flex flex-row items-end h-full justify-between gap-2">
          <p className="">Qty:{item.quantity}</p>
          <IconButton icon={"TrashIcon"} onClick={() => {}} />
        </div>
      </div>
    </>
  );
}
