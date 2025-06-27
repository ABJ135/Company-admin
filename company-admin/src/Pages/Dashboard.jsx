import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans">


      <main className="px-10 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[32px] font-bold text-[#121416]">Dashboard</h1>
          <button
            onClick={() => navigate("/campaigns/create")}
            className="h-10 px-4 rounded-full bg-[#dce7f3] hover:bg-blue-100 flex items-center gap-2 text-sm font-bold text-[#121416] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H136v80..." />
            </svg>
            Create Campaign
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Active Campaigns', value: 12, change: '+10%', color: '#078838' },
            { label: 'Total Feedback', value: 345, change: '+5%', color: '#078838' },
            { label: 'Submission Trend', value: '23%', change: '-2%', color: '#e73908' },
          ].map(({ label, value, change, color }, i) => (
            <div key={i} className="p-6 border rounded-xl border-[#dde0e3]">
              <p className="text-base font-medium text-[#121416]">{label}</p>
              <p className="text-2xl font-bold text-[#121416]">{value}</p>
              <p className="text-base font-medium" style={{ color }}>{change}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Submissions Chart Box */}
          <div className="flex-1 min-w-[280px] p-6 border border-[#dde0e3] rounded-xl">
            <p className="text-base font-medium text-[#121416] mb-1">Submissions over time</p>
            <p className="text-[32px] font-bold text-[#121416] truncate">+12%</p>
            <div className="flex gap-1 text-base">
              <p className="text-[#6a7581]">Last 30 days</p>
              <p className="font-medium text-[#078838]">+12%</p>
            </div>
            <div className="py-4">
              <div className="min-h-[180px] w-full bg-[#f1f2f4] rounded-md"></div>
              <div className="flex justify-around pt-4 text-[13px] font-bold text-[#6a7581]">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map(m => <p key={m}>{m}</p>)}
              </div>
            </div>
          </div>

          {/* Sentiment Distribution */}
          <div className="flex-1 min-w-[280px] p-6 border border-[#dde0e3] rounded-xl">
            <p className="text-base font-medium text-[#121416] mb-1">Sentiment Distribution</p>
            <p className="text-[32px] font-bold text-[#121416] truncate">-5%</p>
            <div className="flex gap-1 text-base">
              <p className="text-[#6a7581]">Last 30 days</p>
              <p className="font-medium text-[#e73908]">-5%</p>
            </div>
            <div className="grid grid-cols-3 gap-4 items-end justify-items-center py-4 h-[180px]">
              {[80, 40, 70].map((h, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-full bg-[#f1f2f4] border-t-2 border-[#6a7581]" style={{ height: `${h}%` }}></div>
                  <p className="text-[13px] font-bold text-[#6a7581] mt-1">
                    {['Positive', 'Neutral', 'Negative'][i]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
