import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// 1. Sélecteur pour récupérer tous les livres
const selectBooks = (state: RootState) => state.books;

// 2. Sélecteur combiné : on filtre par `isread`
export const selectReadBooks = createSelector(
  [selectBooks],
  (books) => books.filter(book => book.isread)
);

export const selectAuthorBooks = (author:string)=>{
    return createSelector(
        [selectBooks],
        (books)=>books.filter(book=> book.author === author)
    )
}

