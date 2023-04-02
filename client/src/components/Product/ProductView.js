import React, { useState } from 'react';

function Product({ product, setIsEditing }) {
  const [ currentImage, setCurrentImage ] = useState(0);

  const handleImageClick = (index) => setCurrentImage(index);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <h2 className="text-lg font-medium">{product.title}</h2>
        </div>
        <div>
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="mt-4 image-container">
        {product.images.length > 1 && (
          <div>
            {product.images.map((image, index) => (
              <button key={index} onClick={() => handleImageClick(index)} className="image-button"
                      style={{ backgroundColor: index === currentImage ? 'black' : 'white' }}/>
            ))}
          </div>
        )}
        <img src={product.images[currentImage]} alt={product.title} className="image-element"/>
      </div>
      <p className="mt-4">${product.price}</p>
      <p className="text-gray-500 mt-4">{product.description}</p>
    </>
  );
}

export default Product;


