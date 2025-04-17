import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ book }) => {
  const { bookName, author, image, review, rating } = book;
  // const bookData=use(booksPromise)
  // console.log(bookData);
  return (
    <div className="card bg-base-100 w-96 shadow-sm border border-gray-300 my-12">
      <figure className="p-4 bg-gray-100 w-2/3 mx-auto m-4">
        <img className="h-[166px]" src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{review}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">
            {rating}
            <FaStarHalfAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
