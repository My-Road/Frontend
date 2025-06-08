import { EmployeeLogPayload } from "@/pages/EmployeeDetails/types";
import { EmployeeLog } from "@/types";

export function transformEmployeeLogToPayload(employeelog: EmployeeLog): EmployeeLogPayload {
    return {
      ...employeelog,
      date:(employeelog.date),
    };
  }