import React from "react";
import "./App.css";
// import SkiDayCounter from "./SkiDayCounter";
import Library from "./components/Library";

let bookList = [
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260 },
  { title: "Hunger", author: "Roxane Gay", pages: 320 },
  { title: "White Teeth", author: "Zadie Smith", pages: 305 },
  {
    title: "The Innovation Secret of Steve Jobs",
    author: "Carmine Gallo",
    pages: 480
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library books={bookList} />
      </header>
    </div>
  );
}

export default App;
