// React version of the Campaigns page based on your HTML input.
import React from "react";
import { useNavigate } from "react-router-dom";

const Campaigns = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans">
      

      <main className="px-40 py-5">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <h1 className="text-[32px] font-bold text-[#121416]">Campaigns</h1>
          <button
            onClick={() => navigate("/campaigns/create")}
            className="h-8 px-4 rounded-full bg-[#f1f2f4] hover:bg-blue-100 text-[#121416] text-sm font-medium"
          >
            New Campaign
          </button>
        </div>

        <div className="px-4 py-3">
          <div className="overflow-hidden rounded-xl border border-[#dde0e3] bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-white">
                  <th className="px-4 py-3 text-left text-[#121416] text-sm font-medium">Name</th>
                  <th className="px-4 py-3 text-left text-[#121416] text-sm font-medium">Created Date</th>
                  <th className="px-4 py-3 text-left text-[#121416] text-sm font-medium">Status</th>
                  <th className="px-4 py-3 text-left text-[#121416] text-sm font-medium">Form Preview Link</th>
                  <th className="px-4 py-3 text-left text-[#6a7581] text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Customer Satisfaction Survey",
                    date: "2023-08-15",
                    status: "Active",
                    link: "https://example.com/survey1",
                  },
                  {
                    name: "Product Feedback Form",
                    date: "2023-07-22",
                    status: "Inactive",
                    link: "https://example.com/form2",
                  },
                  {
                    name: "Employee Engagement Survey",
                    date: "2023-06-10",
                    status: "Active",
                    link: "https://example.com/survey3",
                  },
                ].map(({ name, date, status, link }, i) => (
                  <tr key={i} className="border-t border-[#dde0e3]">
                    <td className="px-4 py-2 text-[#121416] text-sm">{name}</td>
                    <td className="px-4 py-2 text-[#6a7581] text-sm">{date}</td>
                    <td className="px-4 py-2">
                      <button className="h-8 px-4 rounded-full bg-[#f1f2f4] text-[#121416] text-sm font-medium">
                        {status}
                      </button>
                    </td>
                    <td className="px-4 py-2 text-[#6a7581] text-sm">{link}</td>
                    <td className="px-4 py-2 text-[#6a7581] text-sm font-bold">Edit | Delete</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Campaigns;
