import "./App.css";
import { useSelector } from "react-redux";
import {
  selecteBooks,
  selecteHorrorBooks,
  selecteScienceFictionBooks,
  selecteFantasyBooks,
} from "./features/boockSelector";
import { useState } from "react";

function App() {
  const [genre, setGenre] = useState("all");

  const books = useSelector((state) => {
    if (genre === "horror") return selecteHorrorBooks(state);
    if (genre === "sci-fi") return selecteScienceFictionBooks(state);
    if (genre === "fantasy") return selecteFantasyBooks(state);
    return selecteBooks(state); // default: all books
  });

  return (
    <>
      <button onClick={() => setGenre("all")}>Tous les livres</button>
      <button onClick={() => setGenre("horror")}>Livres d'horreur</button>
      <button onClick={() => setGenre("sci-fi")}>Science-fiction</button>
      <button onClick={() => setGenre("fantasy")}>Fantasy</button>

      <ul style={{ listStyle: "none" }}>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author} - {book.genre}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
