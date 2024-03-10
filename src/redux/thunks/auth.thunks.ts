import {createAsyncThunk} from '@reduxjs/toolkit'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {FIREBASE_AUTH} from '../../../firebase.config'


// Sign In
export const signInThunk = createAsyncThunk(
  'userAuth/signIn',
  async (
    {username, password}: {username: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        username,
        password,
      )

      const {uid, email, displayName} = userCredential.user
      const {token: accessToken, expirationTime} =
        await userCredential.user.getIdTokenResult()

      return {
        accessToken,
        expirationTime,
        userData: {
          uid,
          email,
          displayName,
        },
      }
    } catch (error) {

      return rejectWithValue('Invalid credentials.')
    }
  },
)

//Sign Out
export const signOutThunk = createAsyncThunk(
    'userAuth/signOut',
    async (_, {rejectWithValue}) => {
      try {
        await FIREBASE_AUTH.signOut()
        return null
      } catch (error) {
        return rejectWithValue(error)
      }
    },
  )
  
