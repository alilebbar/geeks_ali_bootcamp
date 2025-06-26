import { configureStore } from '@reduxjs/toolkit'
import calendrierSlice from '../features/calendrierSlice/calendrierSlice'

export default configureStore({
  reducer: {
    calendrier: calendrierSlice,
  },
})