import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { default as artistAccountSvg } from "../../../../public/images/artists_account.svg";
import checkSvg from "../../../../public/images/check.svg";
import customerAccountSvg from "../../../../public/images/customer_account.svg";

const SingUpView = () => {
  const [artistAccount, setArtistAccount] = useState(true);

  return (
    <div className="layout p-5 mt-10">
      <h1 className="block text-center mb-10 font-normal text-2xl">
        Únete a RedBubble
      </h1>
      <form className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-2  relative">
          <button
            type="button"
            className="border border-gray-700 text-start p-3"
          >
            {artistAccount ? (
              <Image
                src={checkSvg}
                alt="artist account"
                width={40}
                className="mx-auto absolute top-0 -m-5"
              />
            ) : null}
            <Image
              src={artistAccountSvg}
              alt="artist account"
              width={60}
              className="mx-auto"
            />
            <span className="mt-2 inline-block">Cuenta de artista</span>
            <span className="text-sm block text-gray-500">
              Monta tu propia tienda y vende tus diseños
            </span>
          </button>
          <button
            type="button"
            className="border border-gray-100 text-start p-3 opacity-30"
            disabled
          >
            {!artistAccount ? (
              <Image
                src={checkSvg}
                alt="artist account"
                width={40}
                className="mx-auto absolute top-0 -m-5"
              />
            ) : null}
            <span className="text-sm block text-center">Próximamente...</span>
            <Image
              src={customerAccountSvg}
              alt="customer account"
              width={60}
              className="mx-auto"
            />
            <span className="mt-2 inline-block">Cuenta de cliente</span>
            <span className="text-sm block text-gray-500">
              Busca y compra productos de tu gusto
            </span>
          </button>
        </div>
        <div className="my-8" />
        <label htmlFor="email" className="label">
          Correo electrónico
        </label>
        <input
          type="text"
          id="email"
          className="input"
          placeholder="example@correo.com"
        />
        <div className="mt-4" />
        <label htmlFor="password" className="label">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className="input"
          placeholder="********"
        />
        <div className="mt-4" />
        <label htmlFor="useranme" className="label">
          Nombre de usuario
        </label>
        <input
          type="text"
          id="useranme"
          className="input"
          placeholder="example_user"
        />
        <div className="mt-5" />
        <div>
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Enviarme ofertas especiales
            </label>
          </div>
        </div>
        <div className="mt-8" />
        <button type="button" className="button mx-auto block">
          Únete a la comunidad
        </button>
        <span className="text-sm text-center block mt-2">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Inicia sesión
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SingUpView;
