import React from "react";

const PasswordField = ({ value, onChange, strength }) => (
  <div className="flex flex-col px-4 py-3 max-w-[480px] w-full">
    <input
      type="password"
      name="password"
      value={value}
      onChange={onChange}
      placeholder="Password"
      className="w-full rounded-xl border border-[#dde0e3] h-14 px-4 text-base placeholder-[#6a7581] focus:border-blue-400 focus:outline-none transition-all duration-200"
    />
    {value && (
      <p
        className={`text-sm mt-1 ${
          strength === "Weak"
            ? "text-red-500"
            : strength === "Medium"
            ? "text-yellow-500"
            : "text-green-600"
        }`}
      >
        Password strength: {strength}
      </p>
    )}
  </div>
);

export default PasswordField;
