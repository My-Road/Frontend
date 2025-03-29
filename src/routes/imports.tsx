import { lazy } from "react";

export const AccessDenied = lazy(() => import("@/pages/AccessDenied"));
export const NotFound = lazy(() => import("@/pages/NotFound"));
export const Unauthenticated = lazy(() => import("@/pages/Unauthenticated"));
export const Login = lazy(() => import("@/pages/Login"));
export const Home = lazy(() => import("@/pages/Home")); 
export const ResetPassword = lazy(() => import("@/pages/ResetPassword"));
export const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"));
export const Employees = lazy (()=>import ("@/pages/Employees")); 
export const Register = lazy(() => import("@/pages/Register"))