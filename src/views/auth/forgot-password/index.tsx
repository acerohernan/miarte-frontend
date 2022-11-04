import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ForgotPasswordFormValues } from "../../../api/user/types";
import Button from "../../../components/button";
import { useAuthContext } from "../../../context/hooks";
import { emailRegex } from "../../../utils/validation";

const ForgotPasswordView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>();

  const {
    state: { loading },
    actions: { forgotPassword },
  } = useAuthContext();

  const [sended, setSended] = useState(false);

  const onSubmit = async (form: ForgotPasswordFormValues) => {
    await forgotPassword(form);
    setSended(true);
  };

  return (
    <div className="layout p-5 my-10">
      <h1 className="block text-center mb-10 font-normal text-2xl">
        Recupera tu contraseña
      </h1>
      {!sended ? (
        <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
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
          <div className="mt-8" />
          <Button loading={loading} submit>
            Recuperar contraseña
          </Button>
          <span className="text-sm text-center block mt-4">
            Se te enviará un correo electrónico con el link para restaurar tu
            contraseña.
          </span>
          <span className="text-sm text-center block mt-4">
            ¿Ya te acordaste de tu contraseña?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Ingresa
            </Link>
          </span>
        </form>
      ) : null}
      {sended ? (
        <div className="max-w-md mx-auto">
          <span className="text-sm text-center block mt-4 ">
            Se envió correctamente el link de recuperación al correo
            electrónico. Si no logra encontrarlo, revise en su carpeta de spam.
          </span>
          <span className="text-sm text-center block mt-4">
            ¿Ya te acordaste de tu contraseña?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Ingresa
            </Link>
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default ForgotPasswordView;
