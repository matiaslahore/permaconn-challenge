import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productReducer from './slices/product';

export default configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: [thunk],
});
