import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import "./styles.css"
import { updateProduct } from "../../services/api";

const ProductEdit = ({ product, onEditClose }) => {
  const dispatch = useDispatch();
  const [ formData, setFormData ] = useState({
    title: product.title,
    price: product.price,
    description: product.description
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    dispatch(updateProduct(product.id, formData));
    onEditClose();
  }

  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md product-container">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title" className="block font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleInputChange}
          className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border rounded-md py-2 px-3 mt-1"
        />
        <label htmlFor="price" className="block font-medium text-gray-700 mt-4">
          Price
        </label>
        <input
          type="text"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleInputChange}
          className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border rounded-md py-2 px-3 mt-1"
        />
        <label htmlFor="description" className="block font-medium text-gray-700 mt-4">
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleInputChange}
          className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border rounded-md py-2 px-3 mt-1"
        />
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
          >
            Save
          </button>
          <button
            type="button"
            className="ml-4 bg-gray-200 text-gray-700 rounded-lg px-4 py-2"
            onClick={onEditClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductEdit;


