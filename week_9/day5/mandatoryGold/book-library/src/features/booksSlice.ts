import { createSlice } from "@reduxjs/toolkit";
import type { Book } from "../model/Book";

const initialState: Book[] = [];
const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers:{
       addBook: (state,action)=>{
           
            state.push(action.payload.book);
       },
       removeBook: (state, action) => {
            return state.filter(book => book.id !== action.payload.id);
       },
       toggleisread: (state, action) => {
                const book = state.find(book => book.id === action.payload.id);
                if (book) {
                    book.isread = !book.isread;
                }
    }
}
})
export default bookSlice.reducer;
export const { addBook, removeBook, toggleisread } = bookSlice.actions;