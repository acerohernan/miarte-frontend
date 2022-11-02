import Link from "next/link";

const LoginView = () => {
  return (
    <div className="layout p-5 mt-10">
      <h1 className="block text-center mb-10 font-normal text-2xl">
        Ingresa a tu cuenta
      </h1>
      <form className="max-w-md mx-auto">
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
              Recordarme
            </label>
          </div>
        </div>
        <div className="mt-8" />
        <button type="button" className="button mx-auto block">
          Ingresa
        </button>
        <span className="text-sm text-center block mt-2">
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
