import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgetPassword";
import Dashboard from "./Pages/Dashboard";
import Campaigns from "./Pages/Campaigns";
import Distribute from "./Distribute";
import Submissions from "./Pages/Submissions";
import Reports from "./Pages/Reports";
import CustomerSupport from "./Pages/ContactSupport";
import Navbar from "./Components/Navbar";
import ViewProfile from "./Pages/Profile/ViewProfile";

// ✅ Helper: check if token is expired
const isTokenExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1])); // decode JWT payload
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp < currentTime; // true if expired
  } catch (err) {
    return true; // invalid token
  }
};

// ✅ Protected route for logged-in users
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token || isTokenExpired(token)) {
    localStorage.removeItem("token");
    return <Navigate to="/" replace />;
  }

  return children;
};

// ✅ Public route (redirect logged-in users to dashboard)
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token && !isTokenExpired(token)) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

function App() {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (token && isTokenExpired(token)) {
      localStorage.removeItem("token");
      navigate("/", { replace: true });
    }
  }, [token, location.pathname, navigate]);

  const hideNavbar =
    location.pathname === "/" || location.pathname.toLowerCase() === "/signup";

  return (
    <div>
      {!hideNavbar && token && !isTokenExpired(token) && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/campaigns"
          element={
            <ProtectedRoute>
              <Campaigns />
            </ProtectedRoute>
          }
        />
        <Route
          path="/distribute"
          element={
            <ProtectedRoute>
              <Distribute />
            </ProtectedRoute>
          }
        />
        <Route
          path="/submissions"
          element={
            <ProtectedRoute>
              <Submissions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/support"
          element={
            <ProtectedRoute>
              <CustomerSupport />
            </ProtectedRoute>
          }
        />

        <Route
          path="/forgot-password"
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />
        <Route
          path="/ViewProfile"
          element={
            <ProtectedRoute>
              <ViewProfile />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
