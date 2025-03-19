import { Role } from "./enums";

export interface RegisterPayLoad {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: Role;
}
