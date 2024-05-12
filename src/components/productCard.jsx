import { FiBookmark } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";

import Button from "./button";

export default function ProductCard({
  title,
  description,
  price,
  vendeur,
  customStyle,
}) {
  return (
    <div
      className={`w-[200px] border bg-white gap-1  min-h-[200px] p-2 flex flex-col rounded-2xl hover:-translate-y-2 hover:shadow-md transition-all cursor-pointer ${customStyle}`}
    >
      {/* Product Image */}
      <div className="flex flex-col py-2 px-2 justify-between h-[180px] bg-[url('/images/imgfood.png')] bg-cover bg-center rounded-lg">
        <div className="flex justify-between w-full ">
          <span className="bg-white text-secondary px-2 h-fit rounded-md text-xs hover:scale-105 transition-all cursor-pointer">
            -
          </span>
          <FiBookmark color="green" />
        </div>
      </div>

      <div className=" flex flex-col">
        <p className=" font-bold">{title}</p>
        <p className="text-jay_primary text-xs ">{description}</p>
        <p className="font-bold">{price} Fcfa</p>
      </div>

      <Button
        type="primary"
        text={"Ajouter au panier"}
        customStyle={"text-xs "}
        icon={<FaCartShopping color="white" />}
      />
    </div>
  );
}
