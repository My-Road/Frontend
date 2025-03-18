import { RouteObject } from "react-router-dom";
import { AccessDenied, Login, NotFound, ResetPassword, Unauthenticated, ForgotPassword, Register } from "./imports";


const publicRoutes: RouteObject = {
  path: "",
  children: [
    {
      index: true,
      element: <Login />,
    },
    {
      path: 'forgot-password',
      element: <ForgotPassword/>
    },
    {
      path: 'register',
      element: <Register/>
    },
    {
      path: "reset-password",
      element: <ResetPassword />
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
  ],
};

export default publicRoutes;
