export interface resetForgetPasswordPayload{
    userId: number;
    token: string;
    newPassword: string;
    confirmNewPassword: string;
}