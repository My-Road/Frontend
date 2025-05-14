import { Employee, SearchParams } from "@/types";

export type EmployeeData = Pick<
  Employee,
  "id" | "employeeName" | "jobTitle" | "phoneNumber" | "address" | "startDate"
>;

export type EmployeePayments = Pick<
  Employee,
  "totalPaidAmount" | "totalDueAmount" | "remainingAmount"
>;

export interface EmployeePaymentPayload {
  amount: number;
  paymentDate: string;
  notes: string;
  employeeId: number;
}
export interface Payment {
  employeeId: number;
  employee: Employee,
  amount: number;
  paymentDate: string;
  notes: string;
  isDeleted: boolean;
  deletedAt: string;
  id: number
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
  }

  export interface EmployeeLogPayload {
    employeeId: number;
    date: string; 
    checkIn: string; 
    checkOut: string; 
    hourlyWage: number;
    notes: string;
    createdByUserId: number;
  }

  
  export interface SearchResponseForPayments extends SearchParams {
    items:Payment[];
    totalCount: number;
  }
  
  export interface SearchResponseForEmployeeLog extends SearchParams {
    items: EmployeeLog[];
    totalCount: number;
}

export type PaymentState = {
  status: boolean;
  msg: string;
};
