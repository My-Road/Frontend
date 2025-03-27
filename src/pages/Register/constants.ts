import { RegisterPayLoad } from "./types";
import { Roles } from "@/enums/Roles";

export const initialValues: RegisterPayLoad = {
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  role: Roles.Admin,
};
