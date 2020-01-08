import React from "react";

const Book = ({ title, author, pages, freeBookmark }) => {
  return (
    <div>
      <h2> {title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark Today: {freeBookmark ? "yes!" : "no!"}</p>
    </div>
  );
};

export default Book;
