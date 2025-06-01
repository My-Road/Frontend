import AppLayout from "@/containers/Layout/AppLayout";
import { RouteObject } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import {
  Home,
  ChangePassword,
  Register,
  Customers,
  CustomerDetails,
  Employees,
  EmployeeDetails,
  Suppliers,
  SupplierDetails,
  CustomersReports,
  OrderInvoice,
  Users,
  Profile,
  PurchasesReports,
  PurchaseInvoice,
  EmployeesLogsReports,
  LogInvoice,
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
          path: "profile",
          element: <Profile />,
        },
        {
          path: "customers",
          element: <Customers />,
        },
        {
          path: "customer/:customerId",
          element: <CustomerDetails />,
        },
        {
          path: "employees",
          element: <Employees />,
        },
        {
          path: "employees/:employeeId",
          element: <EmployeeDetails />,
        },
        {
          path: "suppliers",
          element: <Suppliers />,
        },
        {
          path: "suppliers/:supplierId",
          element: <SupplierDetails />,
        },
        {
          path: "reports/customers-orders",
          element: <CustomersReports />,
        },
        {
          path: "reports/customer-orders/:orderId",
          element: <OrderInvoice />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "reports/purchases",
          element: <PurchasesReports />,
        },
        {
          path: "reports/employees-logs",
          element: <EmployeesLogsReports />,
        },
        {
          path: "reports/purchases/:purchaseId",
          element: <PurchaseInvoice />,
        },
         {
          path: "reports/employee-logs/:employeeId",
          element: <LogInvoice />,
        },
      ],
    },
  ],
};

export default privateRoutes;
