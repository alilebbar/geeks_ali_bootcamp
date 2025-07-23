import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RecipesResponse } from "../types/types";

export const fetchData = createAsyncThunk<RecipesResponse,string>(
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