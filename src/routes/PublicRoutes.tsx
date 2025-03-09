import { RouteObject } from "react-router-dom";
import { AccessDenied, ForgetPassword, Login, NotFound, Unauthenticated } from "./imports";

const publicRoutes: RouteObject = {
  path: "",
  children: [
    {
      index: true,
      element: <Login />,
    },
    {
      path: "access-denied",
      element: <AccessDenied />,
    },
    {
      path: "unauthenticated",
      element: <Unauthenticated />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: 'forgot-password',
      element: <ForgetPassword/>
    }
  ],
};

export default publicRoutes;
