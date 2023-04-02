import axios from "axios";
import { BACKEND_ENDPOINT_URL } from "../constants/api";
import {
  productAdded,
  productsLoading,
  productsReceived,
  productsRequestFailed,
  productUpdated
} from "../store/slices/product";

const fetchProducts = (query) => async (dispatch) => {
  try {
    dispatch(productsLoading());
    let URL = `${BACKEND_ENDPOINT_URL}/products`;
    URL += query ? `?query=${query}` : "";
    const { data } = await axios.get(URL);
    dispatch(productsReceived(data));
  } catch (error) {
    dispatch(productsRequestFailed(error.message));
  }
};

const createProduct = (newProduct) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${BACKEND_ENDPOINT_URL}/products`, newProduct);
    dispatch(productAdded(data));
    return data;
  } catch (error) {
    dispatch(productsRequestFailed(error.message));
  }
}

const updateProduct = (id, updates) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${BACKEND_ENDPOINT_URL}/products/${id}`, updates);
    dispatch(productUpdated({ id, ...updates }));
    return data;
  } catch (error) {
    dispatch(productsRequestFailed(error.message));
  }
};

export {
  fetchProducts,
  updateProduct,
  createProduct
}
