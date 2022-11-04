import { BASE_URL, fetchData } from "..";
import {
  ForgotPasswordFormValues,
  LoginFormValues,
  RestorePasswordFormValues,
  SignUpFormValues,
  VerifyForgotPasswordCodeFormValues,
} from "./types";

const headers = () => ({
  "Content-Type": "application/json",
  Accept: "application/json",
});

const authenticatedHeaders = () => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: String(localStorage.getItem("token")),
});

export const signUp = (data: SignUpFormValues) =>
  fetchData.post(`${BASE_URL}/user/auth/signup`, data, { headers: headers() });

export const login = (data: LoginFormValues) =>
  fetchData.post(`${BASE_URL}/user/auth/login`, data, { headers: headers() });

export const forgotPassword = (data: ForgotPasswordFormValues) =>
  fetchData.post(`${BASE_URL}/user/auth/password/forgot`, data, {
    headers: headers(),
  });

export const verifyForgotPasswordCode = (
  data: VerifyForgotPasswordCodeFormValues
) =>
  fetchData.post(`${BASE_URL}/user/auth/password/verify-code`, data, {
    headers: headers(),
  });

export const restorePassword = (data: RestorePasswordFormValues) =>
  fetchData.post(`${BASE_URL}/user/auth/password/restore`, data, {
    headers: headers(),
  });

export const getInformation = () =>
  fetchData.get(`${BASE_URL}/user/information`, {
    headers: authenticatedHeaders(),
  });

export const getSteps = () =>
  fetchData.get(`${BASE_URL}/user/steps`, {
    headers: authenticatedHeaders(),
  });
