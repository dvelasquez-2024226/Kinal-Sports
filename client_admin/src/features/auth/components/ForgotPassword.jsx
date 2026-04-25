import { useForm } from "react-hook-form";

export const ForgotPassword = ({ onSwitch }) => {
  const {
    register,
    // hancdleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form className="space-y-5">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1.5">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="email@example.com"
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          {...register("email", {
            required: "El email es requerido",
          })}
        />
        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-main-blue hover:opacity-90 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm"
      >
        Enviar correo de recuperación
      </button>
      <p className="text-center text-sm">
        <button
          type="button"
          onClick={onSwitch}
          className="text-main-blue hover:underline hover:curson-pointer"
        >
          ¿Ya tienes una cuenta? Inicia sesión
        </button>
      </p>
    </form>
  );
};
