import ProductCard from "../components/productCard";
export default function ListerProduits({products}){
  products = [
    {
      title: "Product 1",
      description: "Description 1",
      price: 1000,
    },
    {
      title: "Product 2",
      description: "Description 2",
      price: 2000,
    },
    {
      title: "Product 3",
      description: "Description 3",
      price: 3000,
    },
    {
      title: "Product 4",
      description: "Description 4",
      price: 4000,
    },
    {
      title: "Product 5",
      description: "Description 5",
      price: 5000,
    },
    {
      title: "Product 6",
      description: "Description 6",
      price: 6000,
    },
    {
      title: "Product 7",
      description: "Description 7",
      price: 7000,
    },
    {
      title: "Product 8",
      description: "Description 8",
      price: 8000,
    },
    {
      title: "Product 9",
      description: "Description 9",
      price: 9000,
    },
    {
      title: "Product 10",
      description: "Description 10",
      price: 10000,
    },
  ];
  return(
    <>
      <div>
        <h1 className="text-4xl font-bold pb-4">Liste de vos annonces</h1>
        {products.length === 0 && <p>Vous n'avez fait aucune annonce.</p>}
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard product={product.title} description={product.description} price={product.price} button_libelle={"Modifier"} button_onClick={()=>{}}/>
          ))}
        </div>
      </div>
    </>
  )
}

