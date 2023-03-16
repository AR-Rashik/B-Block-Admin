import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddClient from "../../Pages/Home/AddClient/AddClient";
import AllClients from "../../Pages/Home/AllClients/AllClients";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "addclient",
        element: <AddClient></AddClient>,
      },
      {
        path: "/allclients",
        element: <AllClients></AllClients>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
