import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputField from "../Components/InputField";
import PasswordField from "../Components/PasswordField";
import BrandingHeader from "../Components/BrandingHeader";

const Signup = () => {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [step, setStep] = useState(1); 
  const [tempToken, setTempToken] = useState("");
  const [otp, setOtp] = useState("");

  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    ownerName: "",
    email: "",
    password: "",
    ownerPhone: "",
  });

  const [passwordStrength, setPasswordStrength] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    for (let key in formData) {
      if (!formData[key]) {
        setError("Please fill out all fields");
        return;
      }
    }

    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

    if (!strongPassword.test(formData.password)) {
      setError(
        "Password must be at least 8 characters & include uppercase, lowercase, number, and special character."
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

      const res = await axios.post(`${API_BASE_URL}/Company/register/start`, payload);

      setTempToken(res.data.tempToken);
      setSuccess("OTP sent to your email!");
      setStep(2); 
    } catch (err) {
      console.error("Signup Error:", err);
      setError(err.response?.data?.error || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setError("");
    setSuccess("");

    if (!otp) {
      setError("Enter OTP");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${API_BASE_URL}/Company/register/verify`, {
        otp,
        tempToken,
      });

      setSuccess("Account created successfully! Redirecting...");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      console.error("OTP Error:", err);
      setError(err.response?.data?.error || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-sans">
      <BrandingHeader />

      <div className="flex justify-center px-4 md:px-40 flex-1 w-full">
        <div className="flex flex-col w-full max-w-xl bg-white shadow-md rounded-2xl py-8 mb-10">
          <h2 className="text-center text-2xl font-bold text-gray-800 pb-4">
            Company Signup
          </h2>

          {step === 1 && (
            <form onSubmit={handleSubmitSignup}>
              <InputField name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" />
              <InputField type="email" name="companyEmail" value={formData.companyEmail} onChange={handleChange} placeholder="Company Email" />
              <InputField name="companyPhone" value={formData.companyPhone} onChange={handleChange} placeholder="Company Phone" />
              <InputField name="ownerName" value={formData.ownerName} onChange={handleChange} placeholder="Owner Name" />
              <InputField type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Owner Email" />

              <PasswordField value={formData.password} onChange={handleChange} strength={passwordStrength} />

              <InputField name="ownerPhone" value={formData.ownerPhone} onChange={handleChange} placeholder="Owner Phone" />

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
                  {loading ? "Sending OTP..." : "Register Company"}
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <div className="flex flex-col items-center px-6">
              <p className="text-gray-600 text-sm text-center px-4">
                An OTP has been sent to your email <b>{formData.email}</b>.
                Enter it below to complete registration.
              </p>

              <input
                type="text"
                maxLength="6"
                className="mt-6 border border-gray-300 rounded-lg px-4 py-2 w-40 text-center tracking-widest text-lg"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              {success && <p className="text-green-600 text-sm mt-2">{success}</p>}

              <button
                onClick={handleVerifyOtp}
                disabled={loading}
                className={`mt-4 h-10 px-10 rounded-full text-sm font-bold text-white transition-all duration-300 ${
                  loading ? "bg-green-300" : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>

              <button
                className="text-xs text-blue-600 underline mt-3"
                onClick={() => setStep(1)}
              >
                ← Go back
              </button>
            </div>
          )}

          <p
            className="text-center text-sm text-gray-600 underline cursor-pointer hover:text-blue-600 transition-colors mt-4"
            onClick={() => navigate("/")}
          >
            Already have an account? Log In
          </p>
        </div>
      </div>

      <footer className="text-center text-gray-400 text-xs pb-4">
        © {new Date().getFullYear()} Voclytics. All rights reserved.
      </footer>
    </div>
  );
};

export default Signup;
