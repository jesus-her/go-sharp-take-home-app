// Importaciones necesarias de Redux Toolkit y Firebase
import {createSlice} from '@reduxjs/toolkit'

import {signInThunk, signOutThunk} from '../thunks/auth.thunks'

interface IUser {
  uid: string | null
  email: string | null
  displayName: string | null
}

// Tipos para el estado
interface IAuthState {
  loading: boolean
  isLoggedIn: boolean
  user: IUser | null
  accessToken: string | null
  isExpired: boolean | null
  error: any | null
  success: boolean
}

// Estado inicial
const initialState: IAuthState = {
  loading: false,
  isLoggedIn: false,
  user: null,
  accessToken: null,
  isExpired: null,
  error: null,
  success: false,
}

// Slice
const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // signIn
    builder
      .addCase(signInThunk.pending, state => {
        return (state = {
          ...initialState,
          loading: true,
        })
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        return (state = {
          ...initialState,
          loading: false,
          success: true,
          accessToken: action.payload.accessToken,
          isLoggedIn: true,
          isExpired: false,
          user: action.payload.userData,
        })
      })

      .addCase(signInThunk.rejected, (state, action) => {
        return (state = {
          ...initialState,
          isLoggedIn: false,
          success: false,
          error: action.payload,
        })
      })

      // Sign Out
      .addCase(signOutThunk.pending, state => {
        return (state = {
          ...initialState,
          loading: true,
        })
      })
      .addCase(signOutThunk.fulfilled, (state, action) => {
        return (state = {
          ...initialState,
          loading: false,
          success: true,
          accessToken: null,
          isLoggedIn: false,
          isExpired: true,
          user: null,
        })
      })

      .addCase(signOutThunk.rejected, (state, action) => {
        return (state = {
          ...initialState,
          error: action.payload,
        })
      })
  },
})

export const {} = authSlice.actions

// Selector para el estado de isLoggedIn
export const selectIsLoggedIn = (state: {userAuth: IAuthState}) =>
  state.userAuth.isLoggedIn

// Selector para el estado de loading
export const selectLoading = (state: {userAuth: IAuthState}) =>
  state.userAuth.loading

// Selector para el usuario actual
export const selectCurrentUser = (state: {userAuth: IAuthState}) =>
  state.userAuth.user

// Selector para posibles errores
export const selectError = (state: {userAuth: IAuthState}) =>
  state.userAuth.error

export default authSlice.reducer
