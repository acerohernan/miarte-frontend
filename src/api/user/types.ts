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
