import { configureStore } from "@reduxjs/toolkit";
import userAgeSlice from "../features/age/userAgeSlice";

export default configureStore({
  reducer: {
    userAge: userAgeSlice,
  },
});
