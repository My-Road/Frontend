import { EmployeeLogPayload, EmployeeLog } from "@/pages/EmployeeDetails/types";

export function transformEmployeeLogToPayload(employeelog: EmployeeLog): EmployeeLogPayload {
    return {
      ...employeelog,
      date:(employeelog.date),
    };
  }