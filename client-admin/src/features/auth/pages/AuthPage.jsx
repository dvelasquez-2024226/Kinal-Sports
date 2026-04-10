import { LoginForm } from "../components/LoginForm"
import { ForgotPassword } from "../components/ForgotPassword"

export const AuthPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:pd-10">
        <LoginForm />
      </div>
    </div>
  )
}
