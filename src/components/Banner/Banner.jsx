import React from "react";
import bookImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex items-center my-12">
      <div>
        <h1 className="text-5xl font-bold my-4">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn btn-success text-white my-4">View The List</button>
      </div>
      <div>
        <img className="rounded-2xl" src={bookImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
