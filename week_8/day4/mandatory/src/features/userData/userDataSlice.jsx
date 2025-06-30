import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit' 

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({email, password},thunkApi) => {
      try {
        const response = await fetch('http://localhost:3000/api/users/login', {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({email, password})
        })
        if(!response.ok)throw new Error(response.statusText)
        const data = await response.json()
        return data
        
      } catch (error) {
        return thunkApi.rejectWithValue(error.message)
      }
        
    })

const initialState = {
  user: null,         // contiendra les données utilisateur après succès
  loading: false,     // devient true pendant la requête
  error: null         // contiendra le message d'erreur en cas d'échec
}

const userDataSlice = createSlice({
  name:'userData',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(loginUser.pending,(state)=>{
      state.loading = true,
      state.error = null
    })
    builder.addCase(loginUser.fulfilled,(state,action)=>{
      state.loading = false,
      state.user = action.payload.user
    })
    builder.addCase(loginUser.rejected,(state,action)=>{
      state.loading = false,
      state.error = action.payload
    })
  }
})
export default userDataSlice.reducer