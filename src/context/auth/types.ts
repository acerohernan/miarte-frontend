import { LoginFormValues, SignUpFormValues } from "../../api/user/types";

export interface IAuthState {
  loading: boolean;
  token: string;
}

export interface IAuthActions {
  signUp: (data: SignUpFormValues) => Promise<void>;
  login: (data: LoginFormValues) => Promise<void>;
  logout: () => void;
}

export interface IAuthContext {
  state: IAuthState;
  actions: IAuthActions;
}
