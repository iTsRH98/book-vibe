import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utilities/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === bookId);
  const { bookName, image, review } = book;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };

  return (
    <div>
      <div className="w-2/3 mx-auto flex gap-8 p-8 m-8">
        <img className="h-[500px]" src={image} alt="" />
        <div>
          <h1 className="text-3xl font-bold my-4">{bookName}</h1>
          <p className="my-4 text-gray-600">{review}</p>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => handleMarkAsRead(id)}
          className="btn btn-accent m-2"
        >
          Mark As Read
        </button>
        <button className="btn btn-info m-2">Add To Wish List</button>
      </div>
    </div>
  );
};

export default BookDetails;
