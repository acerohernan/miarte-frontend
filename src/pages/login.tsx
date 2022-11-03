import { NextPage } from "next";
import PublicRoute from "../components/routes/public";
import LoginView from "../views/auth/login";

const Login: NextPage = () => {
  return (
    <PublicRoute>
      <LoginView />
    </PublicRoute>
  );
};

export default Login;
