import { ReactElement } from "react";

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
export interface Customer {
  [index: string]: string | number;
  _id: string;
  fileNumber: number;
  fName: string;
  mName: string;
  lName: string;
  phone1: string;
  branchId: string;
  phone2: string;
  idNum: string;
  address: string;
  email: string;
  notes: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Employee extends Omit<Customer, "notes"> {}
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
