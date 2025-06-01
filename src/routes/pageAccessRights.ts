import { PageAccessName, PageAccessRight } from "./types";

const pagesAccessRights = new Map<PageAccessName, PageAccessRight>([
  [
    "Home",
    {
      roles: ["Admin", "Manager", "FactoryOwner"],
    },
  ],
  [
    "Customers",
    {
      roles: ["Admin", "Manager", "FactoryOwner"],
    },
  ],
  [
    "CustomerDetails",
    {
      roles: ["Admin", "Manager", "FactoryOwner"],
    },
  ],
  [
    "Employees",
    {
      roles: ["Admin", "Manager", "FactoryOwner"],
    },
  ],
  [
    "EmployeeDetails",
    {
      roles: ["Admin", "Manager", "FactoryOwner"],
    },
  ],
  [
    "Suppliers",
    {
      roles: ["Admin", "Manager", "FactoryOwner"],
    },
  ],
  [
    "SupplierDetails",
    {
      roles: ["Admin", "Manager", "FactoryOwner"],
    },
  ],
  [
    "Register",
    {
      roles: ["FactoryOwner"],
    },
  ],
  [
    "Users",
    {
      roles: ["FactoryOwner"],
    },
  ],
  [
    "OrderInvoice",
    {
      roles: ["FactoryOwner", "Admin"],
    },
  ],
  [
    "OrdersReport",
    {
      roles: ["FactoryOwner", "Admin"],
    },
  ],
   [
    "PurchaseInvoice",
    {
      roles: ["FactoryOwner", "Admin"],
    },
  ],
   [
    "PurchasesReport",
    {
      roles: ["FactoryOwner", "Admin"],
    },
  ],
]);

export default pagesAccessRights;
