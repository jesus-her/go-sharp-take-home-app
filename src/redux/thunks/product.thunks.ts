import { createAsyncThunk } from '@reduxjs/toolkit';
import { FIREBASE_DB } from '../../../firebase.config';
import { addDoc, collection, doc, deleteDoc, updateDoc, getDoc, getDocs } from 'firebase/firestore';

interface IProductData {
  name: string;
  description: string;
  category: string;
  price: number;
}

// CRUD Operations
export const createProductThunk = createAsyncThunk(
  'products/create',
  async (productData: IProductData, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(FIREBASE_DB, 'products'), productData);
      return { id: docRef.id, ...productData };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Similar thunks would be created for update, delete, and fetch operations
// using updateDoc, deleteDoc, and getDoc/getDocs respectively.
