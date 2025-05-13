export interface Employee {
    id: string;
    fullName: string;
    email: string;
    jobTitle: string;
    phoneNumber: string;
    address: string;
    idNumber: string;
    startDate: string;
    endDate?: string;
    status: "Active" | "Temporarily Left" | "Permanently Left";
  
    totalDueAmount: number;
    totalPaid: number;
    remainingAmount: number;
  }