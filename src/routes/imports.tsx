import { lazy } from "react";

export const AccessDenied = lazy(() => import("@/pages/AccessDenied"));
export const NotFound = lazy(() => import("@/pages/NotFound"));
export const Unauthenticated = lazy(() => import("@/pages/Unauthenticated"));
export const Login = lazy(() => import("@/pages/Login"));
export const Home = lazy(() => import("@/pages/Home"));
export const ResetPassword = lazy(() => import("@/pages/ResetPassword"))
export const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"))
export const Register = lazy(() => import("@/pages/Register"))
export const ChangePassword = lazy(() => import("@/pages/ChangePassword"))
export const Customers = lazy(() => import("@/pages/Customers"))
export const CustomerDetails = lazy(() => import("@/pages/CustomerDetails"))
export const Employees = lazy (()=>import ("@/pages/Employees")); 
export const EmployeeDetails = lazy (()=>import ("@/pages/EmployeeDetails")); 
export const Suppliers = lazy(() => import("@/pages/Suppliers"));
export const SupplierDetails = lazy(() => import("@/pages/SupplierDetails"));
export const CustomersReports = lazy(() => import("@/pages/Reports/Customers/"))


