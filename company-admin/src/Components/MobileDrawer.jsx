import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function MobileDrawer({
  isOpen,
  setIsOpen,
  triggerRef,
  links = [],
  hideLogout = false,
  isProfileMenu = false
}) {
  const drawerRef = useRef(null);
  const prevActiveRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      prevActiveRef.current = document.activeElement;
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        const focusable = drawerRef.current?.querySelector("a,button");
        focusable?.focus();
      }, 0);
    } else {
      document.body.style.overflow = "";
      prevActiveRef.current?.focus?.();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40">

      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      <aside
        ref={drawerRef}
        className={`fixed top-0 bottom-0 w-72 max-w-full bg-white shadow-xl transform transition-transform duration-300 
          ${isProfileMenu ? "right-0" : "left-0"}`}
      >

        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="text-lg font-bold text-blue-700">
            {isProfileMenu ? "My Account" : "Menu"}
          </span>

          <button onClick={() => setIsOpen(false)} className="p-2 rounded-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-2">

          {isProfileMenu && (
            <>
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-2 rounded-md text-base font-medium text-blue-900 hover:bg-blue-50"
              >
                View Profile
              </Link>

              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-2 rounded-md text-base font-medium text-blue-900 hover:bg-blue-50"
              >
                View Subscription
              </Link>

              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  window.location.href = "/";
                }}
                className="w-full text-left py-3 px-2 rounded-md text-base font-semibold text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            </>
          )}

          {!isProfileMenu &&
            links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-2 rounded-md text-base font-medium text-blue-900 hover:bg-blue-50"
              >
                {l.label}
              </Link>
            ))}
        </nav>
      </aside>
    </div>
  );
}
