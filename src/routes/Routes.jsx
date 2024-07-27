import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layouts/Root/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import User from "../pages/User/User";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:"/",
          element: <Login></Login>,
        },
        {
          path:"/register",
          element: <Register></Register>,
        },
        {
          path: "/user",
          element: <User></User>,
        }
      ]
    },
  ]);

export default router;