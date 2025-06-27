import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add validation or login logic here
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden font-sans">
      <div className="flex justify-center px-4 md:px-40 py-5 flex-1">
        <div className="flex flex-col w-full max-w-xl py-5">
          <div className="h-[100px]" />
          <h2 className="text-center text-[28px] font-bold text-[#121416] py-5">Voxlytics</h2>

          <div className="flex flex-wrap gap-4 px-4 py-3 max-w-[480px]">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-[#dde0e3] bg-white h-14 px-4 text-base placeholder-[#6a7581] focus:border-[#dde0e3] focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-4 px-4 py-3 max-w-[480px]">
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-[#dde0e3] bg-white h-14 px-4 text-base placeholder-[#6a7581] focus:border-[#dde0e3] focus:outline-none"
            />
          </div>

          <div className="flex px-4 py-3">
            <button
              onClick={handleLogin}
              className="h-10 px-16 w-fit items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white"
            >
              Log In
            </button>
          </div>

          <p className="text-center text-sm text-[#6a7581] underline px-4">Forgot password?</p>
          <p className="text-center text-sm text-[#6a7581] underline px-4 pt-1">Don't have an account? Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
