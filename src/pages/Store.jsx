import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import SearchInput from "../components/SearchInput";
import MdIcon from "../components/MdIcon";
import { useState } from "react";
import Card from "../components/productCard";

const links = [
  {
    label: "Accueil",
    lien: "/dashboard",
    icon: "HomeIcon",
  },
  {
    label: "Store",
    lien: "/store",
    icon: "ShowIcon",
  },
];

const products = [
  {
    id: 1,
    name: "Carotte",
    price: 10.99,
    description: "This is the description of Product 1.",
    image: "/images/banane.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    description: "This is the description of Product 2.",
    image: "/images/banane.jpg",
  },
  {
    id: 4,
    name: "Product 3",
    price: 14.99,
    description: "This is the description of Product 3.",
    image: "/images/banane.jpg",
  },
  {
    id: 5,
    name: "Product 2",
    price: 19.99,
    description: "This is the description of Product 2.",
    image: "/images/banane.jpg",
  },
  {
    id: 6,
    name: "Product 3",
    price: 14.99,
    description: "This is the description of Product 3.",
    image: "/images/banane.jpg",
  },
];

const CategoryList = ({ setSelectedCategory }) => {
  const categories = [
    { name: "Category 1", image: "/images/banane.jpg" },
    { name: "Category 1", image: "/images/cereale.png" },
    { name: "Category 2", image: "/images/epice.png" },
    { name: "Category 1", image: "/images/fruit.png" },
    { name: "Category 2", image: "/images/boucherie.png" },
    { name: "Category 1", image: "/images/merguez.png" },
    // ... ajoutez plus de catégories selon vos besoins
  ];

  return (
    <div className="flex items-center justify-between flex-wrap w-full">
      {categories.map((category, index) => (
        <div
          key={index}
          className=" p-4 flex flex-col cursor-pointer"
          onClick={() => setSelectedCategory(category.name)}
        >
          <div className="w-24  bg-black h-20 rounded-xl">
            <img
              src={category.image}
              className="object-cover h-full w-full "
              width={"auto"}
              height={"auto"}
            />
          </div>
          <div>
            <h2 className="mt-2 text-center">{category.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Store() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const addToCart = (product) => {
    console.log(cart);
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    } else {
      setCart(cart.filter((item) => item.id !== product.id));
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="page-title">
        <BreadCrumb links={links} />
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold mb-4">Nos catégories</h1>
          <SearchInput
            placeholder="Rechercher un produit"
            onChange={(e) => setSearch(e.target.value)}
            className="bg-black"
          />
        </div>
        <div className="bg-white border rounded-xl">
          <CategoryList setSelectedCategory={setSelectedCategory} />
        </div>
        <h1 className="text-2xl font-semibold mt-4">Nos produits</h1>
      </div>
      <div className=" rounded-t-md rounded-b-md shadow-xs py-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products
            .filter((product) =>
              product.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((product, index) => (
              //   <div
              //     key={product.id}
              //     className="card card-compact w-60 bg-base-100 shadow-sm rounded-md"
              //   >
              //     <figure>
              //       <img src={product.image} className="w-28" alt="Shoes" />
              //     </figure>
              //     <div className="card-body">
              //       <h2 className="text-xl">{product.name}</h2>
              //       <p className="text-xs">Price: ${product.price}</p>
              //       <div className="card-actions justify-end">
              //         <button
              //           className="btn btn-[#064B4E]"
              //           onClick={() => addToCart(product)}
              //         >
              //           <MdIcon
              //             className="w-4 h-4 mx-2"
              //             aria-hidden="true"
              //             icon={"CartIcon"}
              //           />
              //           {cart.some((item) => item.id === product.id)
              //             ? "Added to cart"
              //             : "Add to cart"}
              //         </button>
              //       </div>
              //     </div>
              //   </div>
              <Card
                key={product.id}
                description={product.description}
                title={product.name}
                price={product.price}
                customStyle={"w-full"}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
