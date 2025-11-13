import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetCompanyPassword, verifyCompanyResetOtp } from "../api/companyUser.api";
import BrandingHeader from "../Components/BrandingHeader";
import InputField from "../Components/InputField";
import PasswordField from "../Components/PasswordField";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1 = Email input, 2 = OTP + new password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // ✅ Step 1: Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setLoading(true);
    try {
      const res = await resetCompanyPassword(email);
      setMessage(res.message || "OTP sent to your email");
      setStep(2);
    } catch (err) {
      console.error("Reset password error:", err);
      setError(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Step 2: Verify OTP and reset password
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!otp || !newPassword) {
      setError("Please enter OTP and new password");
      return;
    }

    setLoading(true);
    try {
      console.log(email, otp, newPassword);
      const res = await verifyCompanyResetOtp(email, otp, newPassword);
      setMessage(res.message || "Password reset successful!");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      console.error("Verify OTP error:", err);
      setError(err.response?.data?.message || "Invalid OTP or request failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden font-sans">
      <div className="flex justify-center px-4 md:px-40 py-5 flex-1">
        <form
          onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp}
          className="flex flex-col w-full max-w-xl py-5"
        >
          <div className="h-[100px]" />
          <BrandingHeader
            title={step === 1 ? "Reset your password" : "Verify OTP & set new password"}
          />

          {/* Step 1: Email Input */}
          {step === 1 && (
            <InputField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          )}

          {/* Step 2: OTP + New Password */}
          {step === 2 && (
            <>
              <InputField
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
              <PasswordField
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
              />
            </>
          )}

          {/* Feedback messages */}
          {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>}
          {message && <p className="text-green-600 text-center text-sm mt-2">{message}</p>}

          {/* Submit button */}
          <div className="flex px-4 py-3">
            <button
              type="submit"
              disabled={loading}
              className={`h-10 px-16 w-fit items-center justify-center rounded-full text-sm font-bold text-white ${
                loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading
                ? step === 1
                  ? "Sending..."
                  : "Verifying..."
                : step === 1
                ? "Send OTP"
                : "Reset Password"}
            </button>
          </div>

          {/* Navigation link */}
          <p
            className="text-center text-sm text-[#6a7581] underline px-4 pt-1 cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => navigate("/")}
          >
            Back to Login
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
