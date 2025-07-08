import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [], 
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory(state, action) {
      const newCategory = {
        ...action.payload,
        id: Date.now(), 
      };
      state.categories.push(newCategory);
    },
    removeCategory(state, action) {
      state.categories = state.categories.filter(
        (cat) => cat.id !== action.payload.id
      );
    },
    editCategory(state, action) {
      const index = state.categories.findIndex(
        (cat) => cat.id === action.payload.id
      );
      if (index !== -1) {
        state.categories[index].name = action.payload.name;
      }
    },
  },
});

export const { addCategory, removeCategory, editCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
