import React from "react";
import Book from "./Book";

const Library = () => {
  return (
    <div>
      <Book title="The Sun Also Rises" author="Ernest Hemingway" pages={260} />
      <Book
        title="The Innovation Secret of Steve Jobs"
        author="Carmine Gallo"
        pages={480}
      />
      <Book title="White Teeth" author="Zadie Smith" pages={305} />
    </div>
  );
};

export default Library;
