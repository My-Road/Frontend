import { safeLazy } from "./utils/safeLazy";

export const AccessDenied = safeLazy(() => import("@/pages/AccessDenied"));
export const NotFound = safeLazy(() => import("@/pages/NotFound"));
export const Unauthenticated = safeLazy(() => import("@/pages/Unauthenticated"));
export const Login = safeLazy(() => import("@/pages/Login"));
export const Home = safeLazy(() => import("@/pages/Home"));
export const ResetPassword = safeLazy(() => import("@/pages/ResetPassword"))
export const ForgotPassword = safeLazy(() => import("@/pages/ForgotPassword"))
export const Register = safeLazy(() => import("@/pages/Register"))
export const ChangePassword = safeLazy(() => import("@/pages/ChangePassword"))
export const Customers = safeLazy(() => import("@/pages/Customers"))
export const CustomerDetails = safeLazy(() => import("@/pages/CustomerDetails"))
export const Employees = safeLazy (()=>import ("@/pages/Employees")); 
export const EmployeeDetails = safeLazy (()=>import ("@/pages/EmployeeDetails")); 
export const Suppliers = safeLazy(() => import("@/pages/Suppliers"));
export const SupplierDetails = safeLazy(() => import("@/pages/SupplierDetails"));
export const CustomersReports = safeLazy(() => import("@/pages/Reports/Customers"))
export const OrderInvoice = safeLazy(() => import("@/pages/Invoices/CustomerOrder"))
export const Users = safeLazy(() => import("@/pages/Users"));
export const Profile = safeLazy(() => import("@/pages/Profile"));
export const PurchasesReports = safeLazy(() => import("@/pages/Reports/Purchases"))
export const PurchaseInvoice = safeLazy(() => import("@/pages/Invoices/Purchase"))
export const EmployeesLogsReports = safeLazy(() => import("@/pages/Reports/Employees"))
export const LogInvoice = safeLazy(() => import("@/pages/Invoices/EmployeeLog"))



