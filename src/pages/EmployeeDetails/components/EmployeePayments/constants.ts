import { EmployeePaymentPayload } from "../../types";
  
  export const initialValues : EmployeePaymentPayload  = { 
      amount: 0,
      notes: "",
      paymentDate: new Date(),
      employeeId : 0
   }