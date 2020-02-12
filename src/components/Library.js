import React, { Component } from "react";
import Book from "./Book";
// import Library from './Library';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      freeBookmark: false,
      hiring: true,
      data: [],
      loading: false
    };
    // this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
      .then(data => data.json())
      .then(data => this.setState({ data, loading: false }));
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
        {/* {this.state.hiring ? <Hiring />:<NotHiring />} */}
        {this.state.loading ? (
          "loading..."
        ) : (
          <div>
            {this.state.data.map(product => {
              return (
                <div>
                  <h3>Library product of the Week!</h3>
                  <h4>{product.name}</h4>
                  <img src={product.image} height={100} alt={"Week Product"} />
                </div>
              );
            })}
          </div>
        )}
        <h1>The library is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark={this.state.freeBookmark}
          />
        ))}
      </div>
    );
  }
}

export default Library;
