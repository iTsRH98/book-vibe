import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Errors from "../pages/Errors/Errors";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errors></Errors>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("./booksData.json"),
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("./booksData.json"),
        Component: BookDetails,
      },
      {
        path: "/readList",
        loader: () => fetch("./booksData.json"),
        Component: ReadList,
      },
    ],
  },
]);
