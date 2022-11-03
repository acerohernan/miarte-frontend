import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthContext } from "../../../context/hooks";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  const {
    state: { token },
  } = useAuthContext();

  const { push } = useRouter();

  useEffect(() => {
    if (Boolean(token)) {
      push("/");
    }
  }, [token]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default PublicRoute;
