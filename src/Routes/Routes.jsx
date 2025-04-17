import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Errors from "../pages/Errors/Errors";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errors></Errors>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);
