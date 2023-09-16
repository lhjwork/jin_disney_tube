import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./components/Login";
import { router } from "./router/router";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
