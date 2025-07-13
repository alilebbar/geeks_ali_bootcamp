import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  interface Book {
    id: number;
    title: string;
    author: string;
  }
  const [booksList, setBooksList] = useState<Book[]>([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
  ]);
  const [books, setBooks] = useState<Book>({
    id: booksList.length + 1,
    title: "",
    author: "",
  });
  const addBook = (): void => {
    setBooksList([...booksList, books]);
  };
  return (
    <>
      <h1>Books</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addBook();
        }}
      >
        <input
          type="text"
          value={books.title}
          onChange={(e) => setBooks({ ...books, title: e.target.value })}
          placeholder="Title"
        />
        <input
          type="text"
          value={books.author}
          onChange={(e) => setBooks({ ...books, author: e.target.value })}
          placeholder="Author"
        />
        <button type="submit">Add Book</button>
      </form>
      <List
        items={booksList}
        renderItem={(book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        )}
      />
    </>
  );
}

export default App;
