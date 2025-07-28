import { useDispatch } from "react-redux";
import { addBook,removeBook,toggleisread } from "../features/booksSlice";
import type { AppDispatch } from "../app/store";
import type { Book } from "../model/Book";

export const useAddBook = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (book: Partial <Book>) => {
    dispatch(addBook({ book }));
  };
};

export const useRemoveBook = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (id: string) => {
    dispatch(removeBook({ id }));
  };
}

export const useToggleReadStatus = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (id: string) => {
    dispatch(toggleisread({ id }));
  };
};