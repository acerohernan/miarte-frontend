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
  user: IUser | null;
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
  getInformation: () => Promise<IUser | null>;
  getSteps: () => Promise<void>;
}

export interface IAuthContext {
  state: IAuthState;
  actions: IAuthActions;
}

export interface IUser {
  id: string;
  email: string;
  username: string;
  description: string | null;
  copyright_name: string | null;
  copyright_url: string | null;
  name: string | null;
  surname: string | null;
  profile_url: string | null;
  banner_url: string | null;
  visible_real_name: boolean;
  show_age_in_profile: boolean;
  show_city_and_country_in_profile: boolean;
  send_special_offers: boolean;
  allow_users_message_me: boolean;
  marketing_off_site: boolean;
}
