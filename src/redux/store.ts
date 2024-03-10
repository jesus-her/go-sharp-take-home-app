import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/auth.slice'

export const store = configureStore({
    reducer: {
        userAuth: authSlice
    },
})

export type AppDispatch = typeof store.dispatch