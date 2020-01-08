import React, { Component } from "react";
import Book from "./Book";

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        <h1>The library is {this.state.open ? "open" : "closed"}</h1>
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
  }
}

export default Library;
