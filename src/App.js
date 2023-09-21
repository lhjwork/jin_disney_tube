import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./components/Login";
import { router } from "./router/router";
import Header from "./components/Header";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
