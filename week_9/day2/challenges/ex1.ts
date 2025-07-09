interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isbn: string;
  genre: string;
}
class Library {
  private books: Book[];
  constructor() {
    this.books = [];
  }
  addBook(book: Book) {
    this.books.push(book);
  }
  getAllBooks(): Book[] {
    return this.books;
  }

  getBookDetails = (isbn: string) => {
    this.books.forEach((b) => {
      if (b.isbn === isbn) {
        console.log(`Title: ${b.title}`);
        console.log(`Author: ${b.author}`);
        console.log(`Published Year: ${b.publishedYear}`);
        console.log(`Genre: ${b.genre}`);
      }
    });
  };
}

class DigitalLibrary extends Library {
  readonly website = "https://www.digitallibrary.com";
  constructor() {
    super();
  }
  listBooks() {
    console.log("Books available at Digital Library:");
    const books = this.getAllBooks();
    books.forEach((book) => {
      console.log(`Title: ${book.title}`);
      console.log(`Author: ${book.author}`);
      console.log(`Published Year: ${book.publishedYear}`);
      console.log(`Genre: ${book.genre}`);
      console.log(`ISBN: ${book.isbn}`);
      console.log(`Website: ${this.website}`);
    });
  }
}

const digitalLibrary = new DigitalLibrary();
digitalLibrary.addBook({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isbn: "9780547249917",
  genre: "Fiction",
});
digitalLibrary.addBook({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  publishedYear: 1960,
  isbn: "9780393248220",
  genre: "Fiction",
});
digitalLibrary.addBook({
  title: "1984",
  author: "George Orwell",
  publishedYear: 1949,
  isbn: "9780316000008",
  genre: "Fiction",
});

digitalLibrary.listBooks();