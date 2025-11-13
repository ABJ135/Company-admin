import React from "react";

const InputField = ({ type = "text", name, value, onChange, placeholder }) => (
  <div className="flex flex-wrap gap-4 px-4 py-3 max-w-[480px] w-full">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-xl border border-[#dde0e3] h-14 px-4 text-base placeholder-[#6a7581] focus:border-blue-400 focus:outline-none transition-all duration-200"
    />
  </div>
);

export default InputField;
