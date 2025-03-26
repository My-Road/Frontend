import { Roles } from "@/enums/Roles";

export interface RegisterPayLoad {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: Roles;
}
