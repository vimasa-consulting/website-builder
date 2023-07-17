export interface LoginPayload {
    email: string,
    password: string;
  }
  
  export interface ResetPasswordPayload {
    token: any,
    password: string;
  }