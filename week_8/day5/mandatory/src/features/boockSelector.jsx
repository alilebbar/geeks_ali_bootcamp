import { createSelector } from "@reduxjs/toolkit";

export const selecteBooks = state => state.books.books;

export const selecteHorrorBooks = createSelector(
    [selecteBooks],
    books => books.filter(books=>books.genre==='Horror')
)

export const selecteScienceFictionBooks = createSelector(
    [selecteBooks],
    books => books.filter(books=>books.genre==='Science Fiction')
)

export const selecteFantasyBooks = createSelector(
    [selecteBooks],
    books => books.filter(books=>books.genre==='Fantasy')
)