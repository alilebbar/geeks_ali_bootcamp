
const express = require('express');
const app = express();
const books = require('./data');

app.use(express.json());


app.get('/api/books', (req, res) => {
  res.json(books);
});


app.get('/api/books/:bookId', (req, res) => {
  const id = Number(req.params.bookId);
  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).send('Book not found');
  }

  res.json(book);
});


app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).send('Missing book data');
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});


app.use((req, res) => {
  res.status(404).send('Route not found');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
