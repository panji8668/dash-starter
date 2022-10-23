import { createSlice } from '@reduxjs/toolkit'
import { sessionSlice } from './sessionSlice'

export const initialState = {
  avatar: '',
  username: '',
  email: '',
  role: [],
}

export const userSlice = createSlice({
  name: 'auth/user',
  initialState,
  reducers: {
    setUser: (_,action) => action.payload,
    userLoggedOut: () => initialState
  },
})


export const {setUser,userLoggedOut} = userSlice.actions;
export default userSlice.reducer