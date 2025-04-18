import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, tags, yearOfPublishing } =
    book;
  // const bookData=use(booksPromise)
  // console.log(bookData);
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm border border-gray-300 my-2">
        <figure className="p-4 bg-gray-100 w-2/3 mx-auto m-4">
          <img className="h-[166px]" src={image} alt="" />
        </figure>
        <div className="card-body">
          <div className="flex gap-4 justify-center">
            {tags.map((tag, index) => (
              <p className="font-semibold" key={index}>
                {tag}
              </p>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p className="font-semibold">By: {author}</p>
          <div className="border-t-1 border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">
              {rating}
              <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
