import type { IProduct } from '../../types/product.types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FIREBASE_DB } from '../../../firebase.config';
import { addDoc, collection, doc, deleteDoc, updateDoc, getDoc, getDocs } from 'firebase/firestore';



// CRUD Operations

// CREATE
export const createProductThunk = createAsyncThunk(
  'products/create',
  async (productData: IProduct, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(FIREBASE_DB, 'products'), productData);
      return { id: docRef.id, ...productData };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// READ
export const fetchProductsThunk = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(FIREBASE_DB, 'products'));
      const products: IProduct[] = [];
      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...(doc.data() as Omit<IProduct, 'id'>) });
      });
      return products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Similar thunks would be created for update, delete, and fetch operations
// using updateDoc, deleteDoc, and getDoc/getDocs respectively.
