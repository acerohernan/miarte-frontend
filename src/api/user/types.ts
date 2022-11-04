export interface SignUpFormValues {
  email: string;
  password: string;
  username: string;
  send_me_special_offers: boolean;
}

export interface LoginFormValues {
  email: string;
  password: string;
  remember_me: boolean;
}

export interface ForgotPasswordFormValues {
  email: string;
}

export interface VerifyForgotPasswordCodeFormValues {
  code: string;
}

export interface RestorePasswordFormValues {
  code: string;
  password: string;
  re_password: string;
}
