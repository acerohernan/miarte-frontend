import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import logoSymbol from "../../../public/images/logo-only-symbol.svg";
import logo from "../../../public/images/logo.svg";
import { useAuthContext } from "../../context/hooks";

const Header = () => {
  const {
    state: { token },
    actions: { logout },
  } = useAuthContext();

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (token !== "") return setAuthenticated(true);

    setAuthenticated(false);
  }, [token]);

  return (
    <div className="border-b border-gray-200">
      <div className="flex items-center justify-between px-5 py-3 layout mx-auto">
        <div className="flex items-center">
          <button className="link">
            <FiMenu className="icon" />
          </button>
          <Link href="/">
            <Image
              src={logoSymbol}
              alt="logo"
              width={30}
              className="ml-2 sm:hidden"
            />
            <Image
              src={logo}
              alt="logo"
              width={150}
              className="ml-2 hidden sm:block"
            />
          </Link>
        </div>
        <div className="flex items-center">
          {!authenticated ? (
            <Link href="/login" className="link font-medium text-md mr-1">
              Inicia sesión
            </Link>
          ) : null}
          {authenticated ? (
            <button className="link" onClick={logout}>
              <IoIosLogOut className="icon" />
            </button>
          ) : null}
          <button className="link">
            <AiOutlineSearch className="icon" />
          </button>
          <Link href="/" className="ml-1 link">
            <AiOutlineShoppingCart className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
