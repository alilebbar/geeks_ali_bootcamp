import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: "Dracula", author: "Bram Stoker", genre: "Horror" },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
    { id: 3, title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
    { id: 4, title: "Frankenstein", author: "Mary Shelley", genre: "Horror" },
    { id: 5, title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy" },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    
  },
});

export default bookSlice.reducer;
