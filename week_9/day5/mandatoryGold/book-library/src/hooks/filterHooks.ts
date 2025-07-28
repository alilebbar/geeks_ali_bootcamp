import { useSelector } from "react-redux";
import { selectReadBooks,selectAuthorBooks } from "../features/booksSelector";


export const useReadBooks = () => {
  return useSelector(selectReadBooks);
};

export const useAuthorBooks = (author: string) => {
  return useSelector(selectAuthorBooks(author));
};