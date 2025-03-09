import { RouteObject } from "react-router-dom";
import { AccessDenied, Login, NotFound, ResetPassword, Unauthenticated } from "./imports";

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
      path: "reset-password",
      element: <ResetPassword/>
    }
  ],
};

export default publicRoutes;
