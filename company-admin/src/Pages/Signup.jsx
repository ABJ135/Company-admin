import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputField from "../Components/InputField";
import PasswordField from "../Components/PasswordField";
import BrandingHeader from "../Components/BrandingHeader";

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
  const [passwordStrength, setPasswordStrength] = useState("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  // ✅ Password strength logic
  const checkPasswordStrength = (password) => {
    if (password.length < 6) return "Weak";
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[@$!%*?#&]/.test(password);
    const score = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;

    if (score <= 2) return "Weak";
    if (score === 3) return "Medium";
    return "Strong";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Required field check
    for (let key in formData) {
      if (!formData[key]) {
        setError("Please fill out all fields");
        return;
      }
    }

    // Strong password check
    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

    if (!strongPassword.test(formData.password)) {
      setError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return;
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
    <div className="min-h-screen flex flex-col items-center bg-white font-sans">
      <BrandingHeader />

      <div className="flex justify-center px-4 md:px-40 flex-1 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-xl bg-white shadow-md rounded-2xl py-8 mb-10"
        >
          <h2 className="text-center text-2xl font-bold text-gray-800 pb-4">
            Company Signup
          </h2>

          <InputField
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
          />
          <InputField
            type="email"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
            placeholder="Company Email"
          />
          <InputField
            name="companyPhone"
            value={formData.companyPhone}
            onChange={handleChange}
            placeholder="Company Phone"
          />
          <InputField
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            placeholder="Owner Name"
          />
          <InputField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Owner Email"
          />

          <PasswordField
            value={formData.password}
            onChange={handleChange}
            strength={passwordStrength}
          />

          <InputField
            name="ownerPhone"
            value={formData.ownerPhone}
            onChange={handleChange}
            placeholder="Owner Phone"
          />

          {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>}
          {success && <p className="text-green-600 text-center text-sm mt-2">{success}</p>}

          <div className="flex justify-center px-4 py-4">
            <button
              type="submit"
              disabled={loading}
              className={`h-10 px-16 rounded-full text-sm font-bold text-white transition-all duration-300 ${
                loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Registering..." : "Register Company"}
            </button>
          </div>

          <p
            className="text-center text-sm text-gray-600 underline cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => navigate("/")}
          >
            Already have an account? Log In
          </p>
        </form>
      </div>

      <footer className="text-center text-gray-400 text-xs pb-4">
        © {new Date().getFullYear()} Voclytics. All rights reserved.
      </footer>
    </div>
  );
};

export default Signup;
