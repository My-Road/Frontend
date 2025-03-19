import { RegisterPayLoad } from "./types";
import { Role } from "./enums";

export const initialValues: RegisterPayLoad = {
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  role: Role.Admin,
};
