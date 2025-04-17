import React, { Suspense, useEffect, useState } from "react";
import Book from "./Book";

const Books = ({ books }) => {
  const [allBooks, setAllBooks] = useState([]);
  //   useEffect(() => {
  //     fetch("booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   });

  //   const booksPromise = fetch("./booksData.json").then((res) => res.json());

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4 p-6">Books</h1>
      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
