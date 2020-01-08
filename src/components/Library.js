import React, { Component } from "react";
import Book from "./Book";

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    // this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
  }
  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { books } = this.props;
    return (
      <div>
        <h1>The library is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
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
