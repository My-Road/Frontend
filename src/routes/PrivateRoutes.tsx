import AppLayout from "@/containers/Layout/AppLayout";
import { RouteObject } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import {
  Home,
  ChangePassword,
  Register,
  Customers,
  CustomerDetails,
} from "./imports";

const privateRoutes: RouteObject = {
  path: "/me",
  element: <AppLayout />,
  children: [
    {
      element: <AuthRoute />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "change-password",
          element: <ChangePassword />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "customers",
          element: <Customers />,
        },
        {
          path: "customer/:customerId",
          element: <CustomerDetails />,
        },
      ],
    },
  ],
};

export default privateRoutes;
