import { createSlice } from '@reduxjs/toolkit';
import { createProductThunk } from '../thunks/product.thunks';

interface IProduct {
  id?: string;
  name: string;
  description: string;
  category: string;
  price: number;
}

interface ProductState {
  products: IProduct[];
  loading: boolean;
  error: any | null;
}

const initialState: ProductState = {
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
        state.products.push(action.payload);
        state.loading = false;
      })
      .addCase(createProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Other cases for update, delete, and fetch operations
  },
});

export default productSlice.reducer;

// Selectors
export const selectAllProducts = (state: { products: ProductState }) => state.products.products;
export const selectLoading = (state: { products: ProductState }) => state.products.loading;
export const selectError = (state: { products: ProductState }) => state.products.error;
