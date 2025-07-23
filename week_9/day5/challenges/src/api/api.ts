import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  'api/fetchData',
  async (url: string, thunkApi) => {
    try {
        const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
    } catch (error: any) {
        return thunkApi.rejectWithValue(error.message);
    }
    }
);