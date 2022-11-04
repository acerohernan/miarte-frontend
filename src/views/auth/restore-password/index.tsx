import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RestorePasswordFormValues } from "../../../api/user/types";
import Button from "../../../components/button";
import { useAuthContext } from "../../../context/hooks";
import { passwordRegex } from "../../../utils/validation";

interface ViewProps {
  code: string;
}

const RestorePasswordView: React.FC<ViewProps> = ({ code }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RestorePasswordFormValues>();

  const {
    state: { loading },
    actions: { verifyForgotPasswordCode, restorePassword },
  } = useAuthContext();

  const [sended, setSended] = useState(false);
  const [invalidCode, setInvalidCode] = useState(false);

  const password_value = watch("password");

  useEffect(() => {
    verifyCode();
  }, [code]);

  const verifyCode = async () => {
    if (code !== "undefined") {
      const { valid } = await verifyForgotPasswordCode({ code });

      if (valid) return setValue("code", code);

      setInvalidCode(true);
    }
  };

  const onSubmit = async (form: RestorePasswordFormValues) => {
    await restorePassword(form);
    setSended(true);
  };

  return (
    <div className="layout p-5 my-10">
      <h1 className="block text-center mb-10 font-normal text-2xl">
        Recupera tu contraseña
      </h1>
      {!invalidCode && !sended ? (
        <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-8" />
          <label htmlFor="password" className="label">
            Nueva contraseña
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
          <div className="mt-5" />
          <label htmlFor="re_password" className="label">
            Confirma tu contraseña
          </label>
          <input
            type="password"
            id="re_password"
            className="input"
            placeholder="********"
            {...register("re_password", {
              required: "El campo es requerido",
              validate: (value) =>
                password_value === value || "Las contraseñas no coinciden",
            })}
          />
          {errors.re_password ? (
            <span className="error-label">{errors.re_password.message}</span>
          ) : null}
          <div className="mt-5" />
          <div className="mt-8" />
          <Button loading={loading} submit>
            Restaurar contraseña
          </Button>
          <span className="text-sm text-center block mt-4">
            ¿Ya te acordaste de tu contraseña?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Ingresa
            </Link>
          </span>
        </form>
      ) : null}
      {invalidCode ? (
        <div className="max-w-md mx-auto">
          <span className="text-sm text-center block mt-4 ">
            El link para restaurar la contraseña es inválido.
          </span>
          <span className="text-sm text-center block mt-4">
            ¿Ya te acordaste de tu contraseña?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Ingresa
            </Link>
          </span>
        </div>
      ) : null}
      {sended ? (
        <div className="max-w-md mx-auto">
          <span className="text-sm text-center block mt-4 ">
            Su contraseña se ha restablecido correctamente.
          </span>
          <span className="text-sm text-center block mt-4">
            Ingresa con tu nueva contraseña{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Ingresa
            </Link>
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default RestorePasswordView;
