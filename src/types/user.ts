export interface User {
  uid: string;
  userName: string;
  phone: string;
  email: string;
  fullName: string;
  userRole: UserRole;
}

export type UserRole = "Admin" | "SuperAdmin"| "Manager" | ""