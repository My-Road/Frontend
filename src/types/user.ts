export interface User {
  uid: string;
  userName: string;
  phone: string;
  email: string;
  fullName: string;
  userRole: UserRole;
  exp: number
}

export type UserRole = "Admin" | "FactoryOwner"| "Manager" | ""