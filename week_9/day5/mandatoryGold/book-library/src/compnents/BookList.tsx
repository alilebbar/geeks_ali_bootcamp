import { useAuthorBooks, useReadBooks } from "../hooks/filterHooks";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";
import type { RootState } from "../app/store";
import { useState } from "react";

export default function BookList({ author }: { author?: string }) {
  const allBooks = useSelector((state: RootState) => state.books);
  const isRead = useReadBooks();
  const authorBooks = useAuthorBooks(author || "");

  // Tu peux garder un filtre actif
  const [data, setData] = useState(allBooks);

  const handleIsread = () => setData(isRead);
  const handleAuthor = () => setData(authorBooks);
  const handleAll = () => setData(allBooks); // bouton pour revenir à la liste complète

  return (
    <>
      <div>
        <button onClick={handleIsread}>isRead</button>
        <button onClick={handleAuthor}>recherche</button>
        <button onClick={handleAll}>All</button>
      </div>
      <div className="book-list">
        {data.map((book:any) => (
          <BookItem data={book} key={book.id} />
        ))}
      </div>
    </>
  );
}
