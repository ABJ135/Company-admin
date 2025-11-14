import React from "react";
import { Link } from "react-router-dom";

export default function ProfileMenu({ setProfileOpen }) {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border p-2 z-50">

      <Link
        to="/dashboard"
        onClick={() => setProfileOpen(false)}
        className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 rounded-md"
      >
        View Profile
      </Link>

      <Link
        to="/dashboard"
        onClick={() => setProfileOpen(false)}
        className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 rounded-md"
      >
        View Subscription
      </Link>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/";
        }}
        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
      >
        Logout
      </button>
    </div>
  );
}
