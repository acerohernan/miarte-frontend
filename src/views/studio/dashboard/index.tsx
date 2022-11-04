import Link from "next/link";
import { FiChevronRight, FiUpload } from "react-icons/fi";

const DashboardView = () => {
  return (
    <div className="layout">
      <div className="flex items-center justify-between">
        <h1 className="h1">Panel de control</h1>
        <Link href="/" className="button justify-between">
          <FiUpload className="font-medium mr-3 w-4 h-4" />
          <span>Añade una obra</span>
        </Link>
      </div>
      <div className="bg-blue-300 p-5 mt-5">
        <h2 className="h2 text-white font-medium">
          ¡Redbubble te da la bienvenida!
        </h2>
        <span className="paragraph text-white">
          Vamos a dejar tu tienda hecha un pincel
        </span>
        <div className="rounded border p-4 mt-5 bg-white shadow-md">
          <h3 className="h3 font-medium"> Crea productos</h3>
          <p className="paragraph mt-3 font-light">
            Sube tus obras y elige productos. Cuantas más opciones tengan tus
            clientes, más posibilidades tendrás de vender.
          </p>
          <Link
            href="/"
            className="flex items-center justify-start px-4 py-2 mt-3"
          >
            <FiChevronRight className="mx-2 text-gray-500" />
            <span className="paragraph hover:underline font-medium">
              Añade diseños
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
