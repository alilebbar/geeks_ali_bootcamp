
import { createAsyncThunk } from "@reduxjs/toolkit";

export const ageUpAsync = createAsyncThunk(
  "age/ageUpAsync",
  async (_, thunkApi) => {
    try {
      const age = thunkApi.getState().userAge.age;

      // Simuler un délai avec une Promise
      const newAge = await new Promise((resolve) =>
        setTimeout(() => resolve(age + 1), 5000)
      );

      return newAge;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const ageDownAsync = createAsyncThunk(
  "age/ageDownAsync",
  async (_, thunkApi) => {
    try {
      const age = thunkApi.getState().userAge.age;

      // Simuler un délai avec une Promise
      const newAge = await new Promise((resolve) =>
        setTimeout(() => resolve(age - 1), 5000)
      );

      return newAge;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
