import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Root from "../pages/Root";
import { NotFound } from "../pages/error/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      // { path: "/videos", element: <Videos /> },
      // { path: "/videos/:videoId", element: <VideoDetatil /> },
    ],
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);
