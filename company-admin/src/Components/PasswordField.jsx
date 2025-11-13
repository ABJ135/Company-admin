import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordField = ({ value, onChange, strength }) => {
  const [showPassword, setShowPassword] = useState(false);

  // Map strength to visual bar
  const getStrengthColor = () => {
    switch (strength) {
      case "Weak":
        return "bg-red-500 w-1/3";
      case "Medium":
        return "bg-yellow-500 w-2/3";
      case "Strong":
        return "bg-green-500 w-full";
      default:
        return "bg-gray-200 w-0";
    }
  };

  return (
    <div className="flex flex-col px-4 py-3 max-w-[480px] w-full">
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={value}
          onChange={onChange}
          placeholder="Password"
          className="w-full rounded-xl border border-[#dde0e3] h-14 px-4 pr-10 text-base placeholder-[#6a7581] focus:border-blue-400 focus:outline-none transition-all duration-200"
        />
        {/* 👁️ Eye Toggle Icon */}
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* Password strength bar */}
      <div className="h-2 mt-2 bg-gray-200 rounded-full overflow-hidden transition-all duration-300">
        <div
          className={`h-full transition-all duration-300 ease-in-out rounded-full ${getStrengthColor()}`}
        ></div>
      </div>

      {/* Password feedback text */}
      {value && (
        <p
          className={`text-sm mt-1 font-medium transition-all duration-200 ${
            strength === "Weak"
              ? "text-red-500"
              : strength === "Medium"
              ? "text-yellow-500"
              : "text-green-600"
          }`}
        >
          {strength === "Strong"
            ? "Strong password "
            : strength === "Medium"
            ? "Good, but can be stronger "
            : "Too weak — try adding symbols, numbers & uppercase "}
        </p>
      )}
    </div>
  );
};

export default PasswordField;
