import { BASE_URL, fetchData } from "..";
import { LoginFormValues, SignUpFormValues } from "./types";

const headers = () => ({
  "Content-Type": "application/json",
  Accept: "application/json",
});

export const signUp = (data: SignUpFormValues) =>
  fetchData.post(`${BASE_URL}/user/auth/signup`, data, { headers: headers() });

export const login = (data: LoginFormValues) =>
  fetchData.post(`${BASE_URL}/user/auth/login`, data, { headers: headers() });
