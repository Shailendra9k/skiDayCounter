import React from "react";
import Book from "./Book";

const Library = ({ books }) => {
  return (
    <div>
      {books.map((book, i) => (
        <Book
          key={i}
          title={book.title}
          author={book.author}
          pages={book.pages}
        />
      ))}
    </div>
  );
};

export default Library;
