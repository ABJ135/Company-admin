import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    ownerName: "",
    email: "",
    password: "",
    ownerPhone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ✅ Use environment variable
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // simple validation
    for (let key in formData) {
      if (!formData[key]) {
        setError("Please fill out all fields");
        return;
      }
    }

    setLoading(true);
    try {
      const payload = {
        companyName: formData.companyName,
        companyEmail: formData.companyEmail,
        companyPhone: formData.companyPhone,
        ownerName: formData.ownerName,
        ownerEmail: formData.email,
        ownerPassword: formData.password,
        ownerPhone: formData.ownerPhone,
      };

      const response = await axios.post(`${API_BASE_URL}/Company/register`, payload);

      if (response.status === 201) {
        setSuccess("Company registered successfully! Redirecting to login...");
        setTimeout(() => navigate("/"), 1500);
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden font-sans">
      <div className="flex justify-center px-4 md:px-40 pb-5 flex-1">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-xl pb-5"
        >
          <div className="h-[100px]" />
          <h2 className="text-center text-[28px] font-bold text-[#121416] pb-5">
            Company Signup
          </h2>

          {/* Company Name */}
          <div className="flex flex-wrap gap-4 px-4 py-3 max-w-[480px]">
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full rounded-xl border border-[#dde0e3] h-14 px-4 text-base placeholder-[#6a7581] focus:border-blue-400 focus:outline-none"
            />
          </div>

          {/* Company Email */}
          <div className="flex flex-wrap gap-4 px-4 py-3 max-w-[480px]">
            <input
              type="email"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              placeholder="Company Email"
              className="w-full rounded-xl border border-[#dde0e3] h-14 px-4 text-base placeholder-[#6a7581] focus:border-blue-400 focus:outline-none"
            />
          </div>

          {/* Company Phone */}
          <div className="flex flex-wrap gap-4 px-4 py-3 max-w-[480px]">
            <input
              name="companyPhone"
              value={formData.companyPhone}
              onChange={handleChange}
              placeholder="Company Phone"
              className="w-full rounded-xl border border-[#dde0e3] h-14 px-4 text-base placeholder-[#6a7581] focus:border-blue-400 focus:outline-none"
            />
          </div>

          {/* Owner Name */}
          <div className="flex flex-wrap gap-4 px-4 py-3 max-w-[480px]">
            <input
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="Owner Name"
              className="w-full rounded-xl border border-[#dde0e3] h-14 px-4 text-base placeholder-[#6a7581] focus:border-blue-400 focus:outline-none"
            />
          </div>

          {/* Owner Email */}
          <div className="flex flex-wrap gap-4 px-4 py-3 max-w-[480px]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Owner Email"
              className="w-full rounded-xl border border-[#dde0e3] h-14 px-4 text-base placeholder-[#6a7581] focus:border-blue-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex flex-wrap gap-4 px-4 py-3 max-w-[480px]">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full rounded-xl border border-[#dde0e3] h-14 px-4 text-base placeholder-[#6a7581] focus:border-blue-400 focus:outline-none"
            />
          </div>

          {/* Owner Phone */}
          <div className="flex flex-wrap gap-4 px-4 py-3 max-w-[480px]">
            <input
              name="ownerPhone"
              value={formData.ownerPhone}
              onChange={handleChange}
              placeholder="Owner Phone"
              className="w-full rounded-xl border border-[#dde0e3] h-14 px-4 text-base placeholder-[#6a7581] focus:border-blue-400 focus:outline-none"
            />
          </div>

          {/* Messages */}
          {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>}
          {success && <p className="text-green-600 text-center text-sm mt-2">{success}</p>}

          {/* Submit */}
          <div className="flex px-4 py-3">
            <button
              type="submit"
              disabled={loading}
              className={`h-10 px-16 w-fit items-center justify-center rounded-full text-sm font-bold text-white ${
                loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Registering..." : "Register Company"}
            </button>
          </div>

          <p
            className="text-center text-sm text-[#6a7581] underline px-4 pt-1 cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => navigate("/")}
          >
            Already have an account? Log In
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
