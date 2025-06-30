import { configureStore } from '@reduxjs/toolkit'
import userDataSlice from '../features/userData/userDataSlice'

export default configureStore({
  reducer: {
    userData: userDataSlice,
  },
})