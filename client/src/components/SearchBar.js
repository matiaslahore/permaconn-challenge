import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { fetchProducts } from "../services/api";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [ query, setQuery ] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    dispatch(fetchProducts(e.target.value));
  };

  return (
    <div className="mt-12 bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5">
      <input
        className="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight
              focus:outline-none focus:shadow-outline lg:text-sm text-xs"
        placeholder="Search Product"
        type="text"
        onChange={handleChange}
      />

      <div className="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onChange={() => dispatch(fetchProducts(query))}
        >
          <path
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414
                  1.414l-4.816-4.816A6 6 0 012 8z"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
