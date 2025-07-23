import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../api/api";
import type { RecipesResponse } from "../types/types";

type DataState = {
  data: RecipesResponse | null;
  loading: boolean;
  error: string | null;
};

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: null,
    loading: false,
    error: null as string | null,
  } as DataState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const { actions, reducer } = dataSlice;
export default dataSlice.reducer;
