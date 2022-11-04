import { NextPage } from "next";
import { useRouter } from "next/router";
import RestorePasswordView from "../../views/auth/restore-password";

const RestorePassword: NextPage = () => {
  const { query } = useRouter();

  return <RestorePasswordView code={String(query.code)} />;
};

export default RestorePassword;
