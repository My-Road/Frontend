import { Lookup, Setting } from "@/types";

export interface LoginPayload {
  userName: string;
  password: string;
}

export interface loginResponse {
  token: string;
  refreshToken: string;
  settings: Array<Setting>;
  lockups: Array<Lookup>;
}
