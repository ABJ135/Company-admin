import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginCompanyUser } from "../api/companyUser.api";

const Login = () => {
  const navigate = useNavigate();

  // form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setLoading(true);
    try {
      const data = await loginCompanyUser(email, password);

      if (data?.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user || {}));
        navigate("/dashboard");
      } else {
        setError("Invalid login response");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden font-sans">
      <div className="flex justify-center px-4 md:px-40 py-5 flex-1">
        <form
          onSubmit={handleLogin}
          className="flex flex-col w-full max-w-xl py-5"
        >
          <div className="h-[100px]" />
          <h2 className="text-center text-[28px] font-bold text-[#121416] py-5">
            Voxlytics
          </h2>

          {/* Email input */}
          <div className="flex flex-wrap gap-4 px-4 py-3 max-w-[480px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded-xl border border-[#dde0e3] bg-white h-14 px-4 text-base placeholder-[#6a7581] focus:border-blue-400 focus:outline-none"
            />
          </div>

          {/* Password input */}
          <div className="flex flex-wrap gap-4 px-4 py-3 max-w-[480px]">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-xl border border-[#dde0e3] bg-white h-14 px-4 text-base placeholder-[#6a7581] focus:border-blue-400 focus:outline-none"
            />
          </div>

          {/* Error message */}
          {error && (
            <p className="text-red-500 text-center text-sm mt-2">{error}</p>
          )}

          {/* Submit button */}
          <div className="flex px-4 py-3">
            <button
              type="submit"
              disabled={loading}
              className={`h-10 px-16 w-fit items-center justify-center rounded-full text-sm font-bold text-white ${
                loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </div>

          {/* Navigation links */}
          <p
            className="text-center text-sm text-[#6a7581] underline px-4 cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot password?
          </p>
          <p
            className="text-center text-sm text-[#6a7581] underline px-4 pt-1 cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => navigate("/Signup")}
          >
            Don’t have an account? Sign Up
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
