import { AuthProvider } from "./auth/AuthContext";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ContextProvider;
