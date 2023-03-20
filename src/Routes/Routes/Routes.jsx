import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddClient from "../../Pages/Home/AddClient/AddClient";
import AddRole from "../../Pages/Home/AddRole/AddRole";
import AllClients from "../../Pages/Home/AllClients/AllClients";
import AllRoles from "../../Pages/Home/AllRoles/AllRoles";
import EditRole from "../../Pages/Home/AllRoles/EditRole";
import BlockList from "../../Pages/Home/BlockList/BlockList";
import ChangePassword from "../../Pages/Home/ChangePassword/ChangePassword";
import Home from "../../Pages/Home/Home/Home";
import MyProfile from "../../Pages/Home/MyProfile/MyProfile";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/client/addclient",
        element: <AddClient></AddClient>,
      },
      {
        path: "/client/allclients",
        element: <AllClients></AllClients>,
      },
      {
        path: "/role/addrole",
        element: <AddRole></AddRole>,
      },
      {
        path: "/role/allroles",
        element: <AllRoles></AllRoles>,
      },
      {
        path: "/role/editrole",
        element: <EditRole></EditRole>,
      },
      {
        path: "/settings/changepassword",
        element: <ChangePassword></ChangePassword>,
      },
      {
        path: "/settings/blocklist",
        element: <BlockList></BlockList>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
