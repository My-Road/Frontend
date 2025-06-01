export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: number;
    isActive: boolean;
  }
  
  export interface UpdateUserPayload {
    firstName?: string;
    lastName?: string;
    email?: string | null;
    phoneNumber?: string;
  }
  