import React from "react";

const Book = ({ title, author, pages }) => {
  return (
    <div>
      <h2> {title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages} pages</p>
    </div>
  );
};

export default Book;
