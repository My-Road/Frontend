import { LoginPayload } from "./API/types";

export const initialValues: LoginPayload = {
  email: "",
  password: "",
};

export const mockedSuccessUser: LoginPayload = {
  email: "user",
  password: "user",
};

export const mockedUnSuccessUser: LoginPayload = {
  email: "salahqerem",
  password: "12345678",
};
