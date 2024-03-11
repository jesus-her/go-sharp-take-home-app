import type {IProduct} from '../../types/product.types'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {FIREBASE_DB} from '../../../firebase.config'
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
} from 'firebase/firestore'

// CRUD Operations

// CREATE
export const createProductThunk = createAsyncThunk(
  'products/create',
  async (productData: Omit<IProduct, 'id'>, {rejectWithValue}) => {
    try {
      const docRef = await addDoc(
        collection(FIREBASE_DB, 'products'),
        productData,
      )
      // Ahora actualizamos el documento recién creado para incluir el id dentro de sus datos.
      await updateDoc(doc(FIREBASE_DB, 'products', docRef.id), {
        id: docRef.id,
      })
      // Retornamos el producto con el id incluido.
      return {id: docRef.id, ...productData}
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

// READ
export const fetchProductsThunk = createAsyncThunk(
  'products/fetchProducts',
  async (_, {rejectWithValue}) => {
    try {
      const querySnapshot = await getDocs(collection(FIREBASE_DB, 'products'))
      const products: IProduct[] = []
      querySnapshot.forEach(doc => {
        products.push({id: doc.id, ...(doc.data() as Omit<IProduct, 'id'>)})
      })
      return products
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

// DELETE
export const deleteProductThunk = createAsyncThunk(
  'products/deleteProduct',
  async (productId: string, {rejectWithValue}) => {
    try {
      await deleteDoc(doc(FIREBASE_DB, 'products', productId))
      return productId // Retorna el id del producto eliminado.
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
