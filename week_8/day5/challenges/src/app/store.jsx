import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from '../features/tasksSlice'
import categoriesSlice from '../features/categoriesSlice'
export default configureStore({
  reducer: {
     tasks: tasksSlice,
     categories: categoriesSlice
  },
})

