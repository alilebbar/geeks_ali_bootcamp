import { createSlice } from '@reduxjs/toolkit'
import { ageUpAsync, ageDownAsync } from './userAgeThunk'
const initialState = {
    age: 0,
    loading: false,
    error: null,
}

const userAgeSlice = createSlice({
    name: 'userAge',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(ageUpAsync.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(ageUpAsync.fulfilled, (state, action) => {
            state.age = action.payload
            state.loading = false
        })
        builder.addCase(ageUpAsync.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        builder.addCase(ageDownAsync.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(ageDownAsync.fulfilled, (state, action) => {
            state.age = action.payload
            state.loading = false
        })
        builder.addCase(ageDownAsync.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default userAgeSlice.reducer