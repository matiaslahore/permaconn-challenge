import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    status: 'not-fetched',
    error: null,
  },
  reducers: {
    productsLoading: (state) => {
      state.status = 'loading';
    },
    productsReceived: (state, action) => {
      state.status = 'succeeded';
      state.products = action.payload.products;
    },
    productsRequestFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    productAdded: (state, action) => {
      state.products.push(action.payload);
    },
    productUpdated: (state, action) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...action.payload };
      }
    },
  },
});

export const {
  productsLoading,
  productsReceived,
  productsRequestFailed,
  productAdded,
  productUpdated,
} = productSlice.actions;

export default productSlice.reducer;
