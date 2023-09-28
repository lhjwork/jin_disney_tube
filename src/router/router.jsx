import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
<<<<<<< HEAD
import WaterWave from "../components/WaterWave/WaterWave";
=======
import Root from "../pages/Root";
import { NotFound } from "../pages/error/NotFound";
>>>>>>> 244114dae62737535ada8e1d8792998712a614aa

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
  {
    path: "/water",
    element: <WaterWave />,
  },
]);
