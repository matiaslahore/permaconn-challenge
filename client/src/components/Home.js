import React from 'react';
import { Link } from "react-router-dom";
import ProductList from "./Product/ProductList";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4">
          <div className="mt-4 grid grid-cols-6 gap-4">
            <div className="col-start-1 col-end-3">
              <h1 className="text-3xl font-bold mb-4">Permaconn Products</h1>
            </div>
            <div className="col-end-8 col-span-2">
              <button className="bg-green-700 text-white rounded-lg px-4 py-2">
                <Link to={"/create"}>Create Product</Link>
              </button>
            </div>
          </div>
          <SearchBar/>
        </div>
      </div>
      <ProductList/>
    </>
  );
}

export default Home;
