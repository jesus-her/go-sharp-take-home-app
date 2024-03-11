import type { IProduct } from '../../types/product.types';
import { createSlice } from '@reduxjs/toolkit';
import { createProductThunk, deleteProductThunk, fetchProductsThunk } from '../thunks/product.thunks';


interface IProductState {
  products: IProduct[];
  loading: boolean;
  error: any | null;
}

const initialState: IProductState = {
  products: [],
  loading: false,
  error: null,
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Create product
    builder
      .addCase(createProductThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProductThunk.fulfilled, (state, action) => {
        // No es necesario retornar el estado. La mutación es segura con Redux Toolkit.
        state.products.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Read products
      .addCase(fetchProductsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
       // delete Product
    builder
    .addCase(deleteProductThunk.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteProductThunk.fulfilled, (state, action) => {
      state.loading = false;
      // Eliminar el producto por id del array de productos
      state.products = state.products.filter((product) => product.id !== action.payload);
    })
    .addCase(deleteProductThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Other cases for update, delete, and fetch operations
  },
});

export default productSlice.reducer;

// Selectors
export const selectAllProducts = (state: { products: IProductState }) => state.products.products;
export const selectLoading = (state: { products: IProductState }) => state.products.loading;
export const selectError = (state: { products: IProductState }) => state.products.error;
