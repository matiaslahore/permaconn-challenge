import React from 'react';
import ProductEdit from "./ProductEdit";
import ProductView from "./ProductView";
import "./styles.css"

const Product = ({ product }) => {
  const [ isEditing, setIsEditing ] = React.useState(false);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md product-container">
      {isEditing ? (
        <ProductEdit product={product} onEditClose={() => setIsEditing(false)}/>
      ) : (
        <ProductView product={product} setIsEditing={setIsEditing}/>
      )}
    </div>
  );
}

export default Product;


