import { IUser } from "./user.types"

export interface IAuthState {
    loading: boolean
    isLoggedIn: boolean
    user: IUser | null
    accessToken: string | null
    isExpired: boolean | null
    error: any | null
    success: boolean
  }
  