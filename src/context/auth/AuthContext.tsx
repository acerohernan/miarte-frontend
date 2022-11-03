import { useRouter } from "next/router";
import React, { useState } from "react";
import { API } from "../../api";
import { LoginFormValues, SignUpFormValues } from "../../api/user/types";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useToast } from "../../utils/toast";
import { IAuthContext } from "./types";

const AuthContext = React.createContext({} as IAuthContext);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(false);
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
      toast.error(error.response!.data!.error! || "Error de servidor");
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
      if (error.response!.status! === 401) {
        toast.error("La contraseña o el correo electrónico  son inválidos");
      } else {
        toast.error(error.response!.data!.error! || "Error de servidor");
      }
    } finally {
      setLoading(false);
    }
  }

  function logout(): void {
    setToken("");
  }

  const actions = { signUp, login, logout };
  const state = { loading, token };

  return (
    <AuthContext.Provider value={{ state, actions }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
