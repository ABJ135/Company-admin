import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Pages/Dashboard";
import Campaigns from "./Pages/Campaigns";
import Distribute from "./Distribute";
import Submissions from "./Pages/Submissions";
import Reports from "./Pages/Reports";
import CustomerSupport from "./Pages/ContactSupport";
import Navbar from "./Components/Navbar";

// ✅ ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  const token = localStorage.getItem("token");
  const location = useLocation(); 

  const hideNavbar = location.pathname === "/" || location.pathname === "/Signup";

  return (
    <div>
      {/* ✅ Only show navbar when logged in AND not on login/signup */}
      {!hideNavbar && token && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
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

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
