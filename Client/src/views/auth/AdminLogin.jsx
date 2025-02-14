import InputForm from "../../components/InputForm";
import MainButton from "../../components/MainButton";
import { MdEmail, MdLock } from "react-icons/md";
import logo from "../../../public/images/logo.png";
import { useCallback, useState } from "react";

const AdminLogin = () => {
  // State initialization
  const [state, setState] = useState({ email: "", password: "" });

  const inputHandle = useCallback((e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500">
      <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg">
        {/* Logo */}
        <div className="flex justify-center">
          <img className="w-[20rem] mb-4" src={logo} alt="Admin Logo" />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Admin Login
        </h2>
        <form onSubmit={submit} className="mt-8 space-y-4">
          {/* Reusable Input Components */}
          <InputForm
            name="email"
            type="email"
            placeholder="Admin Email"
            icon={MdEmail}
            value={state.email}
            onChange={inputHandle}
          />
          <InputForm
            name="password"
            type="password"
            placeholder="Admin Password"
            icon={MdLock}
            value={state.password}
            onChange={inputHandle}
          />
          {/* Submit Button */}
          <MainButton text="Login" className="my-4" />
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
