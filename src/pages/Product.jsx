import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/BreadCrumb";
import SearchInput from "../components/SearchInput";
import TextButton from "../components/TextButton";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import useAxios from "../Hook/useAxios";

// State for the search input
// const [search, setSearch] = useState('');

// State for the pagination

const links = [
  {
    label: "Home",
    lien: "/dashboard",
    icon: "HomeIcon",
  },
  {
    label: "Products",
    lien: "/product",
    icon: "ShowIcon",
  },
];

const products = Array.from({ length: 14 }, (v, i) => ({
  id: i + 1,
  name: "Diay ma",
  image: "/images/banane.jpg",
  price: "680 Fcfa",
}));

export default function Product() {
  const { responseAxios, error, loading, fetchData } = useAxios({
    url: "http://localhost:8000/api/produitVentes",
    method: "GET",
    // body : null,
    headers: {
      "Content-type": "application/json",
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (responseAxios) {
      setProduits(responseAxios.data);
      console.log(produits);
    }
  }, [responseAxios]);

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const goToEdit = (productId) => {
    return () => navigate(`${productId}`);
  };

  const [produits, setProduits] = useState([]);

  return (
    <div className="flex flex-col h-full">
      <div className="page-title">
        <Breadcrumb links={links} />
      </div>
      <div className="bg-white rounded-t-md rounded-b-md shadow-xs p-4 ">
        <div className="flex items-center justify-between">
          <div className="w-64 relative my-8">
            {/* <input class="input h-12 w-full pr-[45px]" type="text" placeholder="Search Here "/> */}
            <SearchInput placeholder="Search product" className="bg-black" />
          </div>
          <TextButton className="bg-primary text-white">Add Product</TextButton>
          {/* {isDrawerOpen && <Drawer/>} */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {produits
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((product, index) => (
              <div key={index} className="relative  mb-5 w-full">
                <div className="rounded-md bg-slate-50 border-gray6 border">
                  <div className="relative p-2">
                    <a>
                      <img
                        className="w-52"
                        src="src/assets/images/banane.jpg"
                        alt="src/assets/images/banane.jpg"
                      />
                    </a>
                    <div className="absolute top-5 bg-white right-5 z-10">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="relative">
                          <button
                            className="btn"
                            onClick={goToEdit(product.product_id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill="currentColor"
                                d="M15.98 7.873c.013.03.02.064.02.098v.06a.24.24 0 0 1-.02.097C15.952 8.188 13.291 14 8 14S.047 8.188.02 8.128A.24.24 0 0 1 0 8.03v-.059c0-.034.007-.068.02-.098C.048 7.813 2.709 2 8 2s7.953 5.813 7.98 5.873m-1.37-.424a12.097 12.097 0 0 0-1.385-1.862C11.739 3.956 9.999 3 8 3c-2 0-3.74.956-5.225 2.587a12.098 12.098 0 0 0-1.701 2.414a12.095 12.095 0 0 0 1.7 2.413C4.26 12.043 6.002 13 8 13s3.74-.956 5.225-2.587A12.097 12.097 0 0 0 14.926 8c-.08-.15-.189-.343-.315-.551M8 4.75A3.253 3.253 0 0 1 11.25 8A3.254 3.254 0 0 1 8 11.25A3.253 3.253 0 0 1 4.75 8A3.252 3.252 0 0 1 8 4.75m0 1C6.76 5.75 5.75 6.76 5.75 8S6.76 10.25 8 10.25S10.25 9.24 10.25 8S9.24 5.75 8 5.75m0 1.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"
                              />
                            </svg>
                            {/* SVG code */}
                          </button>
                        </div>
                        <div className="relative">
                          <button className="btn">
                            <svg
                              className="-translate-y-px text-primary"
                              width="14"
                              height="14"
                              viewBox="0 0 20 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.0697 4.23C17.4597 4.07 15.8497 3.95 14.2297 3.86V3.85L14.0097 2.55C13.8597 1.63 13.6397 0.25 11.2997 0.25H8.67967C6.34967 0.25 6.12967 1.57 5.96967 2.54L5.75967 3.82C4.82967 3.88 3.89967 3.94 2.96967 4.03L0.929669 4.23C0.509669 4.27 0.209669 4.64 0.249669 5.05C0.289669 5.46 0.649669 5.76 1.06967 5.72L3.10967 5.52C8.34967 5 13.6297 5.2 18.9297 5.73C18.9597 5.73 18.9797 5.73 19.0097 5.73C19.3897 5.73 19.7197 5.44 19.7597 5.05C19.7897 4.64 19.4897 4.27 19.0697 4.23Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M17.2297 7.14C16.9897 6.89 16.6597 6.75 16.3197 6.75H3.67975C3.33975 6.75 2.99975 6.89 2.76975 7.14C2.53975 7.39 2.40975 7.73 2.42975 8.08L3.04975 18.34C3.15975 19.86 3.29975 21.76 6.78975 21.76H13.2097C16.6997 21.76 16.8398 19.87 16.9497 18.34L17.5697 8.09C17.5897 7.73 17.4597 7.39 17.2297 7.14ZM11.6597 16.75H8.32975C7.91975 16.75 7.57975 16.41 7.57975 16C7.57975 15.59 7.91975 15.25 8.32975 15.25H11.6597C12.0697 15.25 12.4097 15.59 12.4097 16C12.4097 16.41 12.0697 16.75 11.6597 16.75ZM12.4997 12.75H7.49975C7.08975 12.75 6.74975 12.41 6.74975 12C6.74975 11.59 7.08975 11.25 7.49975 11.25H12.4997C12.9097 11.25 13.2497 11.59 13.2497 12C13.2497 12.41 12.9097 12.75 12.4997 12.75Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            {/* SVG code */}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-5 bg-slate-50 flex items-center justify-between">
                    <a
                      href="#"
                      className="text-lg font-normal text-primary text-hover-primary mb-2 inline-block leading-none"
                    >
                      {product.name}
                    </a>
                    <div className="leading-none mb-2">
                      <span className="text-base font-medium text-black">
                        {product.prixVente}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-end">
          <ReactPaginate
            className="flex justify-center mx-5 text-white"
            previousLabel={"< "}
            nextLabel={" >"}
            breakLabel={"..."}
            breakClassName={"break-me text-black"}
            pageCount={Math.ceil(products.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active rounded bg-primary px-2 mx-6 text-black"}
            previousLinkClassName={"text-primary"}
            nextLinkClassName={"text-primary"}
          />
        </div>
      </div>
    </div>
  );
}
