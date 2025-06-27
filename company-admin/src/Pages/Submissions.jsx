// src/Pages/Submissions.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Submissions = () => {
  const navigate = useNavigate();

  const data = [
    { id: '#12345', date: '2023-08-15', type: 'Feature Request', sentiment: 'Positive' },
    { id: '#12346', date: '2023-08-16', type: 'Bug Report', sentiment: 'Negative' },
    { id: '#12347', date: '2023-08-17', type: 'General Feedback', sentiment: 'Neutral' },
    { id: '#12348', date: '2023-08-18', type: 'Feature Request', sentiment: 'Positive' },
    { id: '#12349', date: '2023-08-19', type: 'Bug Report', sentiment: 'Negative' },
    { id: '#12350', date: '2023-08-20', type: 'General Feedback', sentiment: 'Neutral' },
    { id: '#12351', date: '2023-08-21', type: 'Feature Request', sentiment: 'Positive' },
    { id: '#12352', date: '2023-08-22', type: 'Bug Report', sentiment: 'Negative' },
    { id: '#12353', date: '2023-08-23', type: 'General Feedback', sentiment: 'Neutral' },
    { id: '#12354', date: '2023-08-24', type: 'Feature Request', sentiment: 'Positive' },
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      

      {/* Page Content */}
      <div className="px-20 py-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Submissions</h1>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-4 flex-wrap">
          {['Campaign', 'Feedback Type', 'Sentiment'].map((filter) => (
            <button key={filter} className="flex items-center gap-2 bg-[#f1f2f4] rounded-full px-4 py-1 text-sm font-medium">
              <span>{filter}</span>
              <svg width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
              </svg>
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto border rounded-xl">
          <table className="min-w-full">
            <thead>
              <tr className="bg-white border-b text-sm text-[#121416] font-medium">
                <th className="text-left px-4 py-3 w-[200px]">Submission ID</th>
                <th className="text-left px-4 py-3 w-[200px]">Date</th>
                <th className="text-left px-4 py-3 w-[200px]">Feedback Type</th>
                <th className="text-left px-4 py-3 w-[150px]">Sentiment</th>
                <th className="text-left px-4 py-3 w-[100px] text-[#6a7581]">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className="border-t text-sm">
                  <td className="px-4 py-3 text-[#121416]">{row.id}</td>
                  <td className="px-4 py-3 text-[#6a7581]">{row.date}</td>
                  <td className="px-4 py-3 text-[#6a7581]">{row.type}</td>
                  <td className="px-4 py-3">
                    <span className="inline-block rounded-full bg-[#f1f2f4] px-4 py-1 font-medium text-[#121416]">{row.sentiment}</span>
                  </td>
                  <td className="px-4 py-3 text-[#6a7581] font-bold cursor-pointer">View</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Submissions;
