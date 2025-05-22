import { PageAccessName, PageAccessRight } from "./types";

const pagesAccessRights = new Map<PageAccessName, PageAccessRight>([
  [
    "Home",
    {
      roles: ["Admin", "Manager"],
    },
  ],
  [
    "Customers",
    {
      roles: ["Admin", "Manager"],
    },
  ],
  [
    "CustomerDetails",
    {
      roles: ["Admin", "Manager"],
    },
  ],
  [
    "Employees",
    {
      roles: ["Admin", "Manager"],
    },
  ],
  [
    "EmployeeDetails",
    {
      roles: ["Admin", "Manager"],
    },
  ],
  [
    "Suppliers",
    {
      roles: ["Admin", "Manager"],
    },
  ],
  [
    "SupplierDetails",
    {
      roles: ["Admin", "Manager"],
    },
  ],
  [
    "Register",
    {
      roles: ["SuperAdmin"],
    },
  ],
]);

export default pagesAccessRights;
