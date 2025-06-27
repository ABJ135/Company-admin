import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Distribute() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
    

      <main className="flex flex-col items-start px-40 py-5 max-w-[960px] w-full mx-auto">
        <div className="flex gap-2 text-base font-medium text-gray-600 px-4 pb-1">
          <span className="cursor-pointer" onClick={() => navigate('/campaigns')}>Campaigns</span>
          <span>/</span>
          <span className="text-gray-900">Share</span>
        </div>

        <h2 className="text-[22px] font-bold px-4 pt-4 pb-3">Share your campaign</h2>

        <div className="w-full max-w-md px-4 py-3">
          <select className="w-full h-14 border border-gray-300 rounded-xl p-3 text-base">
            <option value="">Select an option</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </div>

        <h2 className="text-lg font-bold px-4 pt-4 pb-2">Form preview</h2>
        <div className="w-full px-4">
          <div className="aspect-[3/2] bg-gray-100 rounded-xl bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjDyrhgj_kpyTb-ztU3JnGlYxpt1TthQ56S5q5Ax1RTkwZ9gvx8gAWCU6yfvDPc02AiJ-hadKN9N5a4cRZxhhliNi4Ig6QnwO5oFqSsxthT3I9O9h_Wrcu4cp-lRvQf5u1yO1q45fVtIJFv8zW8xJbYVaarNln6RLR2ncuMtxuDqaYHFdWraC5YRUV0org3aINzQPgIZjdCZGdZ2RciyZfJvSVXnsfLxDUsgpEqiI6CQmUSKlTrvcL-czGcXR5G1lj7xKybogcXBo')` }}></div>
        </div>

        <h2 className="text-lg font-bold px-4 pt-4 pb-2">Shareable link</h2>
        <div className="w-full max-w-md px-4 py-3">
          <div className="flex rounded-xl overflow-hidden border border-gray-300">
            <input className="flex-1 h-14 p-3 border-r border-gray-300 rounded-l-xl" type="text" placeholder="https://example.com/form" />
            <button className="w-14 flex items-center justify-center bg-white border-l border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-4 py-3">
          <button className="h-10 px-4 rounded-full bg-gray-200 text-sm font-bold">Show QR code</button>
        </div>
        <div className="px-4 py-3">
          <button className="h-10 px-4 rounded-full bg-blue-100 text-sm font-bold">Share via Email</button>
        </div>
      </main>
    </div>
  );
}
