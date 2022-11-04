import Link from "next/link";
import { useForm } from "react-hook-form";
import { LoginFormValues } from "../../../api/user/types";
import Button from "../../../components/button";
import { useAuthContext } from "../../../context/hooks";
import { emailRegex } from "../../../utils/validation";

const LoginView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const {
    actions: { login },
  } = useAuthContext();

  const onSubmit = async (form: LoginFormValues) => {
    await login(form);
  };

  return (
    <div className="layout p-5 my-10">
      <h1 className="block text-center mb-10 font-normal text-2xl">
        Ingresa a tu cuenta
      </h1>
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
        <label htmlFor="password" className="label">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className="input"
          placeholder="********"
          {...register("password", {
            required: "El campo es requerido",
          })}
        />
        {errors.password ? (
          <span className="error-label">{errors.password.message}</span>
        ) : null}
        <div className="mt-5" />
        <div>
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
              defaultChecked={false}
              {...register("remember_me")}
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
            >
              Recordarme
            </label>
          </div>
        </div>
        <div className="mt-8" />
        <Button loading={false} submit>
          Ingresa
        </Button>

        <span className="text-sm text-center block mt-6">
          ¿Olvidaste tu contraseña?{" "}
          <Link
            href="/forgot-password"
            className="text-blue-500 hover:underline"
          >
            Recupérala
          </Link>
        </span>

        <span className="text-sm text-center block mt-4">
          ¿No tienes una cuenta?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Crea tu cuenta
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LoginView;
