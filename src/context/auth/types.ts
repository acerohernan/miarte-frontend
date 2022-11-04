import {
  ForgotPasswordFormValues,
  LoginFormValues,
  RestorePasswordFormValues,
  SignUpFormValues,
  VerifyForgotPasswordCodeFormValues,
} from "../../api/user/types";

export interface IAuthState {
  loading: boolean;
  token: string;
  user: any;
}

export interface IAuthActions {
  signUp: (data: SignUpFormValues) => Promise<void>;
  login: (data: LoginFormValues) => Promise<void>;
  logout: () => void;
  forgotPassword: (data: ForgotPasswordFormValues) => Promise<void>;
  verifyForgotPasswordCode: (
    data: VerifyForgotPasswordCodeFormValues
  ) => Promise<{ valid: boolean }>;
  restorePassword: (data: RestorePasswordFormValues) => Promise<void>;
  getInformation: () => Promise<void>;
}

export interface IAuthContext {
  state: IAuthState;
  actions: IAuthActions;
}
