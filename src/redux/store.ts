import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/auth.slice'
import productSlice from './slices/product.slice'

export const store = configureStore({
    reducer: {
        userAuth: authSlice,
        products: productSlice
    },
})

export type AppDispatch = typeof store.dispatch