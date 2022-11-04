import Link from "next/link";
import { FiUpload } from "react-icons/fi";
import StepsCard, { StepsCardProperties } from "./components/stepsCard";

const stepsCardData: Array<StepsCardProperties> = [
  {
    title: "Crea productos",
    description:
      "Sube tus obras y elige productos. Cuantas más opciones tengan tus clientes, más posibilidades tendrás de vender.",
    iconPath: "/images/pencil-icon.svg",
    steps: [
      {
        link: "/",
        label: "Añade diseños",
        completed: false,
      },
    ],
  },
  {
    title: "Crea tu tienda",
    description:
      "Personaliza tu tienda para que sea más memorable y atractiva. Hazla tuya.",
    iconPath: "/images/store-icon.svg",
    steps: [
      {
        link: "/",
        label: "Añade un avatar",
        completed: false,
      },
      {
        link: "/",
        label: "Añade una imagen de portada",
        completed: false,
      },
      {
        link: "/",
        label: "Añade redes sociales",
        completed: false,
      },
      {
        link: "/",
        label: "Escribe una biografía",
        completed: false,
      },
    ],
  },
  {
    title: "A cobrar",
    description:
      "Confirma tu cuenta e información de pago para abrir tu tienda y empezar a vender",
    iconPath: "/images/money-icon.svg",
    steps: [
      {
        link: "/",
        label: "Confirma tu email",
        completed: false,
      },
      {
        link: "/",
        label: "Añade tu nombre y dirección postal",
        completed: false,
      },
      {
        link: "/",
        label: "Añade tu información de pago",
        completed: false,
      },
    ],
  },
];

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
      <div className="bg-blue-300 p-5 mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h2 className="h2 text-white font-medium">
          ¡Redbubble te da la bienvenida!
        </h2>
        <span className="paragraph text-white">
          Vamos a dejar tu tienda hecha un pincel
        </span>
        <div className="gap-4 grid mt-4 md:grid-cols-2 lg:grid-cols-3">
          {stepsCardData.map((card) => (
            <StepsCard
              title={card.title}
              description={card.description}
              steps={card.steps}
              iconPath={card.iconPath}
            />
          ))}
        </div>
      </div>
      <p className="paragraph mt-2">
        Cuando hayas completado estos pasos tu tienda estará lista.
      </p>
      <section className="mt-10">
        <h1 className="h1">Consejos para nuevos artistas</h1>
        <div></div>
      </section>
    </div>
  );
};

export default DashboardView;
