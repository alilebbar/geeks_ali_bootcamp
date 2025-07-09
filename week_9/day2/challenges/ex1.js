var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Library = /** @class */ (function () {
    function Library() {
        var _this = this;
        this.getBookDetails = function (isbn) {
            _this.books.forEach(function (b) {
                if (b.isbn === isbn) {
                    console.log("Title: ".concat(b.title));
                    console.log("Author: ".concat(b.author));
                    console.log("Published Year: ".concat(b.publishedYear));
                    console.log("Genre: ".concat(b.genre));
                }
            });
        };
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.getAllBooks = function () {
        return this.books;
    };
    return Library;
}());
var DigitalLibrary = /** @class */ (function (_super) {
    __extends(DigitalLibrary, _super);
    function DigitalLibrary() {
        var _this = _super.call(this) || this;
        _this.website = "https://www.digitallibrary.com";
        return _this;
    }
    DigitalLibrary.prototype.listBooks = function () {
        var _this = this;
        console.log("Books available at Digital Library:");
        var books = this.getAllBooks();
        books.forEach(function (book) {
            console.log("Title: ".concat(book.title));
            console.log("Author: ".concat(book.author));
            console.log("Published Year: ".concat(book.publishedYear));
            console.log("Genre: ".concat(book.genre));
            console.log("ISBN: ".concat(book.isbn));
            console.log("Website: ".concat(_this.website));
        });
    };
    return DigitalLibrary;
}(Library));
var digitalLibrary = new DigitalLibrary();
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
