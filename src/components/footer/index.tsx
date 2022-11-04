import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/hooks";

const Footer = () => {
  const {
    state: { token },
  } = useAuthContext();

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (token !== "") return setAuthenticated(true);

    setAuthenticated(false);
  }, [token]);

  return (
    <>
      {authenticated ? (
        <div className="bg-blue-900">
          <div className="max-w-7xl mx-auto px-7 py-6">
            <Image
              src="/images/logo-white.svg"
              alt="logo white"
              width={150}
              height={100}
            />
            <div className="mt-2">
              <Link
                href="/"
                className="text-white hover:underline text-sm mr-3"
              >
                Condiciones de uso
              </Link>
              <Link
                href="/"
                className="text-white hover:underline text-sm mr-3"
              >
                Política de privacidad
              </Link>
              <Link
                href="/"
                className="text-white hover:underline text-sm mr-3"
              >
                Política de cookies
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Footer;
