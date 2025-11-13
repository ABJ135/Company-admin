import React, { useState } from "react";

function ForgetPassword() {
  const [step, setStep] = useState(1);  
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Step 1: Send OTP
  const handleSendOtp = (e) => {
    e.preventDefault();
    console.log("Sending OTP to:", formData.email);
    // 🟢 Later: call backend POST /api/companyUser/send-otp
    setStep(2);
  };

  // Step 2: Reset Password
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Verifying OTP and resetting password:", formData);
    // 🟢 Later: call backend POST /api/companyUser/reset-password with email, otp, newPassword
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Forgot Password</h2>

      {step === 1 && (
        <form onSubmit={handleSendOtp} style={styles.form}>
          <label style={styles.label}>Enter your registered email:</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Send OTP
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleResetPassword} style={styles.form}>
          <label style={styles.label}>Enter OTP:</label>
          <input
            type="text"
            name="otp"
            placeholder="Enter the OTP sent to your email"
            value={formData.otp}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>New Password:</label>
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            value={formData.newPassword}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "420px",
    margin: "100px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    background: "#fafafa",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontSize: "16px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ForgetPassword;
