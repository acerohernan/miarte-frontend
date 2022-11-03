import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { default as artistAccountSvg } from "../../../../public/images/artists_account.svg";
import checkSvg from "../../../../public/images/check.svg";
import customerAccountSvg from "../../../../public/images/customer_account.svg";
import { SignUpFormValues } from "../../../api/user/types";
import Button from "../../../components/button";
import { useAuthContext } from "../../../context/hooks";
import { emailRegex, passwordRegex } from "../../../utils/validation";

const SingUpView = () => {
  const [artistAccount, setArtistAccount] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>();

  const {
    state: { loading },
    actions: { signUp },
  } = useAuthContext();

  async function onSubmit(form: SignUpFormValues) {
    await signUp(form);
  }

  return (
    <div className="layout p-5 my-10">
      <h1 className="block text-center mb-10 font-normal text-2xl">
        Únete a RedBubble
      </h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
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
          {...register("email", {
            pattern: {
              value: emailRegex,
              message: "Ingrese un correo electrónico válido",
            },
            required: "El campo es requerido",
          })}
        />
        {errors.email ? (
          <span className="error-label">{errors.email.message}</span>
        ) : null}
        <div className="mt-4" />
        <label htmlFor="password" className="label">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className="input"
          placeholder="********"
          {...register("password", {
            pattern: {
              value: passwordRegex,
              message:
                "La contraseña debe 8 caracteres como mínimo y almenos un número y una letra en mayúscula.",
            },
            required: "El campo es requerido",
          })}
        />
        {errors.password ? (
          <span className="error-label">{errors.password.message}</span>
        ) : null}
        <div className="mt-4" />
        <label htmlFor="username" className="label">
          Nombre de usuario
        </label>
        <input
          type="text"
          id="username"
          className="input"
          placeholder="example_user"
          {...register("username", {
            required: "El campo es requerido",
            minLength: {
              value: 6,
              message:
                "El nombre de usuario tiene que tener 6 caracteres como mínimo",
            },
          })}
        />
        {errors.username ? (
          <span className="error-label">{errors.username.message}</span>
        ) : null}
        <div className="mt-5" />
        <div>
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
              {...register("send_me_special_offers")}
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
        <Button loading={loading} submit>
          Únete a la comunidad
        </Button>
        <span className="text-sm text-center block mt-4">
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
