import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import logo from "../../../public/images/logo.png";

const Header = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="flex items-center justify-between px-5 py-3 layout mx-auto">
        <div className="flex items-center">
          <button>
            <FiMenu className="icon" />
          </button>
          <Image src={logo} alt="logo" width={150} className="ml-4" />
        </div>
        <div className="flex items-center">
          <button>
            <AiOutlineSearch className="icon" />
          </button>
          <Link href="/" className="ml-2">
            <AiOutlineShoppingCart className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
