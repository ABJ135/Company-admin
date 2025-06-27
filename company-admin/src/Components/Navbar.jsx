import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <header className="flex items-center justify-between border-b border-[#f1f2f4] px-10 py-3 bg-blue-50 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 text-blue-700">
                  {/* Voxlytics Logo */}
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M39.475 21.6262C40.358 21.4363 ..."
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-blue-700">Voxlytics</h2>
              </div>
              <div className="flex items-center gap-8">
                <nav className="flex gap-9 text-sm font-medium">
                  <Link to="/dashboard" className="text-blue-900 hover:text-blue-600 transition-colors">Dashboard</Link>
                  <Link to="/campaigns" className="text-blue-900 hover:text-blue-600 transition-colors">Campaigns</Link>
                  <Link to="/distribute" className="text-blue-900 hover:text-blue-600 transition-colors">Distribute</Link>
                  <Link to="/submissions" className="text-blue-900 hover:text-blue-600 transition-colors">Submissions</Link>
                  <Link to="/reports" className="text-blue-900 hover:text-blue-600 transition-colors">Reports</Link>
                  <Link to="/support" className="text-blue-900 hover:text-blue-600 transition-colors">Support</Link>
                </nav>
                <button className="h-10 px-2.5 rounded-full bg-blue-100 flex items-center gap-2 text-sm font-bold text-blue-900 hover:bg-blue-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M221.8,175.94..." />
                  </svg>
                </button>
                <div className="w-10 h-10 bg-cover bg-center rounded-full border-2 border-blue-700" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkMG1asO-ELJME3RdmwusKmZ_ruNfVRD4Tz3ezp1SCKiBTJdSlHHg3MFPGe7cB82ij_Kx39ES2vHfIva1OPyVRhLHikLnLiMWuHpIYP4zE8CKs7cPE8cYx17MkzC_ZLn8qkAQcDCUx5YtJEp00yPuWRRVXBgFKYbmfjrLMchp9k9d0fkf3Wq1BBcGTUAKMdK3FhF7i9Hpd0dKmJgwGMD3dU2g_YtQBmDlKCFLaleQou58NR-DJwgbl9sWpvtbCN_EfnagO4uI06Hg')` }} />
              </div>
            </header>
    </div>
  )
}

export default Navbar
