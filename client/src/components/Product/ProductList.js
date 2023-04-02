import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Product from './Product';
import { fetchProducts } from "../../services/api";
import Spinner from "../Spinner";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const status = useSelector((state) => state.product.status);

  useEffect(() => {
    if (status === 'not-fetched') {
      dispatch(fetchProducts());
    }
  }, [ dispatch, status ]);

  if (status === 'loading') {
    return <Spinner />;
  }

  if (status === 'failed') {
    return <div>error while fetching products</div>;
  }

  return (
    <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => <Product key={product.id} product={product}/>)}
    </div>
  );
}

export default ProductList;
