import { UserRole } from "@/types/user";

export interface PageAccessRight {
  roles: UserRole[];
}

export type PageAccessName =
  | "Home"
  | "Register"
  | "Customers"
  | "CustomerDetails"
  | "Employees"
  | "EmployeeDetails"
  | "Suppliers"
  | "SupplierDetails"
  | "Users"
  | "OrdersReport"
  | "OrderInvoice"
  | "PurchasesReport"
  | "PurchaseInvoice"

export interface RouteConfigs {
  title: string;
  pageAccessName?: PageAccessName;
}
