import type { Book } from "../model/Book";

const BookItem = ({ data }: { data: Book }) => {
  return (
    <div className="book-item">
      <div className="book-info">
        <h2>{data.title}</h2>
        <p>{data.author}</p>
      </div>
    </div>
  );
};

export default BookItem;
