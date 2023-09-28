import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import WaterWave from "../components/WaterWave/WaterWave";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
