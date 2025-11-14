import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import MobileDrawer from "./MobileDrawer";
import ProfileMenu from "./ProfileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // left drawer
  const [profileOpen, setProfileOpen] = useState(false); // profile dropdown (desktop)
  const [profileDrawerOpen, setProfileDrawerOpen] = useState(false); // profile drawer (mobile)

  const btnRef = useRef(null);
  const profileBtnRef = useRef(null);

  const links = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/campaigns", label: "Campaigns" },
    { to: "/distribute", label: "Distribute" },
    { to: "/submissions", label: "Submissions" },
    { to: "/reports", label: "Reports" },
    { to: "/support", label: "Support" }
  ];

  return (
    <>
      <header className="relative flex items-center justify-between border-b border-[#f1f2f4] px-4 md:px-10 py-3 bg-blue-50 shadow-sm">

        <button
          ref={btnRef}
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
          className="flex md:hidden h-10 w-10 items-center justify-center rounded-md p-2 bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 text-blue-700">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M39.475 21.6262 ..." fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-blue-700">Voxlytics</h2>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 text-blue-700">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M39.475 21.6262 ..." fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-blue-700">Voxlytics</h2>
          </Link>
        </div>

        <div className="flex items-center gap-4">

          <nav className="hidden md:flex gap-9 text-sm font-medium">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-blue-900 hover:text-blue-600 transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block relative">
            <div
              ref={profileBtnRef}
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-10 h-10 bg-cover bg-center rounded-full border-2 border-blue-700 cursor-pointer"
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/...')` }}
            />
            {profileOpen && (
              <ProfileMenu setProfileOpen={setProfileOpen} />
            )}
          </div>

          <button
            onClick={() => setProfileDrawerOpen(true)}
            className="md:hidden w-10 h-10 bg-cover bg-center rounded-full border-2 border-blue-700"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/...')` }}
          />
        </div>
      </header>

      <div className="md:hidden">
        <MobileDrawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          triggerRef={btnRef}
          links={links}
          hideLogout={true}
        />
      </div>

      <div className="md:hidden">
        <MobileDrawer
          isOpen={profileDrawerOpen}
          setIsOpen={setProfileDrawerOpen}
          triggerRef={profileBtnRef}
          isProfileMenu={true}
        />
      </div>
    </>
  );
}
