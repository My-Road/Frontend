import { Dispatch, ReactElement, SetStateAction } from "react";

export interface QueryObj {
  [index: string]: string | number;
}

export interface IAppMenuItem {
  label: string;
  link?: string;
  Icon?: () => ReactElement;
  items?: IAppMenuItem[];
  useIsVisible?: () => boolean;
}

export interface SearchParams {
  page?: number;
  pageSize?: number;
  filters?: string;
  sorts?: string;
}

export interface Customer {
  customerName: string;
  email: string;
  phoneNumber: string;
  address: string;
  totalPaidAmount: number;
  totalDueAmount: number;
  isDeleted: boolean;
  deletedAt: string | null;
  remainingAmount: number;
  orders: never[];
  customerPayments: never[];
  id: number;
}

export interface Order {
  id: number;
  orderDate: string;
  recipientName: string;
  recipientPhoneNumber: string;
  quantity: number;
  price: number;
  totalDueAmount: number;
  notes: string;
  customerId: number;
  customer: Customer;
  isDeleted: boolean;
  deletedAt: string | null;
  isCompleted: boolean;
  createdByUserId: number;
}

export interface Purchase {
  id: number;
  purchasesDate: string; 
  goodsDeliverer: string;
  goodsDelivererPhoneNumber: string;
  quantity: number;
  price: number;
  totalDueAmount: number;
  notes: string;
  supplierId: number;
  supplier: Supplier | null; 
  isDeleted: boolean;
  deletedAt: string | null;
  isCompleted: boolean;
  createdByUserId: number;
}

export interface Supplier
  extends Omit<Customer, "customerName" | "orders" | "customerPayments"> {
  supplierName: string;
  purchases: never[];
  supplierPayment: never[];
}

export interface Employee {
  status: string;
  id: number;
  employeeName: string;
  phoneNumber: string;
  address: string;
  jobTitle: string;
  idNumber: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  email: string;
  totalDueAmount: number;
  totalPaidAmount: number;
  remainingAmount: number;
  payments: [];
  logs: [];
}

  export interface EmployeeLog {
    id: number;
    employeeId: number;
    employee: Employee | null;
    date: string; 
    checkIn: string; 
    checkOut: string; 
    hourlyWage: number;
    notes: string;
    createdByUserId: number;
    isDeleted: string | null;
    isCompleted: boolean;
    totalHours: number;
    dailyWage: number
  }

export interface Visit {
  _id: string;
  payment: number;
  cost: number;
  treatment: string;
  customerId: string;
  employeeId: string;
  createdAt: Date;
  updatedAt: Date;
  notes?: string;
}
export interface CustomerOption {
  name: string;
  value: string;
}

export interface PaginationProps {
  page: number;
  pageSize: number;
}

export interface Setting {
  [index: string]: string | number;
  _id: string;
  name: string;
  value: string;
  branchId: string;
}

export interface Lookup {
  [index: string]: string | number;
  _id: string;
  name: string;
  value: string;
  branchId: string;
}

export interface LookupItem {
  [index: string]: string | number;
  _id: string;
  name: string;
  value: string;
  lockupId: string;
}

export interface EmployeeOption {
  name: string;
  value: string;
}

export interface ProductOption {
  name: string;
  salePrice: number;
  value: string;
}

export interface Appointment {
  _id: string;
  customerId: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  notes: string;
}

export interface FollowUp {
  _id: string;
  customerId: string;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  [index: string]: string | number | Date | boolean;
  _id: string;
  name: string;
  salePrice: number;
  cost: number;
  branchId: string;
  createdAt: Date;
  updatedAt: Date;
  isSuspended: boolean;
}

export interface FollowUp {
  [index: string]: string | Date;
  _id: string;
  customerId: string;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Expense {
  [index: string]: string | Date | number;
  _id: string;
  name: string;
  amount: number;
  branchId: string;
  createdAt: Date;
  updatedAt: Date;
  notes: string;
}

export interface Sale {
  _id: string;
  customerName: string;
  employeeName: string;
  productName: string;
  salePrice: number;
  saleBonus: number;
  saleDate: Date;
  salesNotes: string;
}

export interface Achievement {
  fullName: string;
  date: Date;
  totalVisits: number;
}

export interface AppointmentReport {
  _id: string;
  fullName: string;
  date: Date;
  time: string;
  phone1: string;
  notes: string;
}

export interface Debt {
  fullName: string;
  phone1: string;
  totalDebts: number;
}

export interface SearchFormProps {
  setSearchParams: Dispatch<SetStateAction<SearchParams>>;
  name: string;
  sortsBy: string;
}