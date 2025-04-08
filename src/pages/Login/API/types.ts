export interface LoginPayload {
  email: string;
  password: string;
}

export interface loginResponse {
  token: string;
  expiresOn: string;
}
