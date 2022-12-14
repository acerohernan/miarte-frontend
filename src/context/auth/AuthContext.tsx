import { useRouter } from "next/router";
import React, { useState } from "react";
import { API } from "../../api";
import {
  ForgotPasswordFormValues,
  LoginFormValues,
  RestorePasswordFormValues,
  SignUpFormValues,
  VerifyForgotPasswordCodeFormValues,
} from "../../api/user/types";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useToast } from "../../utils/toast";
import { IAuthActions, IAuthContext, IAuthState, IUser } from "./types";

const AuthContext = React.createContext({} as IAuthContext);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const { value: token, setValue: setToken } = useLocalStorage("token");

  const { push } = useRouter();
  const toast = useToast();

  async function signUp(data: SignUpFormValues): Promise<void> {
    setLoading(true);
    try {
      await API.user.signUp(data);
      push("/login");
      toast.success("Registrado correctamente");
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Error de servidor");
    } finally {
      setLoading(false);
    }
  }

  async function login(data: LoginFormValues): Promise<void> {
    setLoading(true);
    try {
      const response = await API.user.login(data);
      setToken(String(response.data.token));
      toast.success(`Iniciaste sessión correctamente`);
    } catch (error: any) {
      if (error.response?.status === 401) {
        toast.error("La contraseña o el correo electrónico  son inválidos");
      } else {
        toast.error(error.response?.data?.error || "Error de servidor");
      }
    } finally {
      setLoading(false);
    }
  }

  function logout(): void {
    setToken("");
  }

  async function forgotPassword(data: ForgotPasswordFormValues): Promise<void> {
    setLoading(true);
    try {
      const response = await API.user.forgotPassword(data);
      setUser(response.data?.user);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  }

  async function verifyForgotPasswordCode(
    data: VerifyForgotPasswordCodeFormValues
  ): Promise<{ valid: boolean }> {
    setLoading(true);
    try {
      await API.user.verifyForgotPasswordCode(data);
      return { valid: true };
    } catch (error: any) {
      return { valid: false };
    } finally {
      setLoading(false);
    }
  }

  async function restorePassword(
    data: RestorePasswordFormValues
  ): Promise<void> {
    setLoading(true);
    try {
      await API.user.restorePassword(data);
      toast.success("Contraseña restablecida exitosamente");
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Error de servidor");
    } finally {
      setLoading(false);
    }
  }

  async function getInformation(): Promise<IUser | null> {
    setLoading(true);
    try {
      const response = await API.user.getInformation();
      setUser(response.data.user as IUser);
      return response.data.user;
    } catch (error) {
      toast.error(
        "Error al obtener la información del usuario, porfavor inicia sessión de nuevo"
      );
      setToken("");
      return null;
    } finally {
      setLoading(false);
    }
  }

  async function getSteps() {
    setLoading(true);
    try {
      const response = await API.user.getSteps();
      console.log(response.data);
    } catch (error) {
      toast.error(
        "Error al obtener los logros del usuario, porfavor inicia sessión de nuevo"
      );
    } finally {
      setLoading(false);
    }
  }

  const actions: IAuthActions = {
    signUp,
    login,
    logout,
    forgotPassword,
    verifyForgotPasswordCode,
    restorePassword,
    getInformation,
    getSteps,
  };
  const state: IAuthState = { loading, token, user };

  return (
    <AuthContext.Provider value={{ state, actions }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
