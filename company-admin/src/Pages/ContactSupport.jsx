import { useNavigate } from 'react-router-dom';

export default function ContactSupport() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden font-sans">
      <div className="flex flex-col h-full">
       
        <div className="px-4 md:px-40 py-5 flex flex-1 justify-center overflow-x-auto">
          <div className="flex flex-col max-w-[960px] w-full">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[32px] font-bold text-[#111418]">Contact Support</p>
                <p className="text-sm text-[#60758a]">We're here to help. Please fill out the form below to submit your request.</p>
              </div>
            </div>

            <div className="flex max-w-[480px] flex-wrap gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="pb-2 text-base font-medium text-[#111418]">Subject</p>
                <input
                  placeholder="Enter the subject of your request"
                  className="h-14 rounded-xl border border-[#dbe0e6] bg-white p-4 text-base text-[#111418] placeholder:text-[#60758a]"
                />
              </label>
            </div>

            <div className="flex max-w-[480px] flex-wrap gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="pb-2 text-base font-medium text-[#111418]">Description</p>
                <textarea
                  placeholder="Describe your issue or request in detail"
                  className="min-h-36 rounded-xl border border-[#dbe0e6] bg-white p-4 text-base text-[#111418] placeholder:text-[#60758a]"
                ></textarea>
              </label>
            </div>

            <div className="flex flex-col p-4">
              <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#dbe0e6] px-6 py-14">
                <div className="flex max-w-[480px] flex-col items-center gap-2">
                  <p className="text-lg font-bold text-[#111418] text-center">Drag and drop files here, or click to browse</p>
                  <p className="text-sm font-normal text-[#111418] text-center">Attach any relevant files to help us understand your request better.</p>
                </div>
                <button className="rounded-full h-10 px-4 bg-[#f0f2f5] text-sm font-bold text-[#111418]">
                  <span className="truncate">Browse Files</span>
                </button>
              </div>
            </div>

            <div className="flex justify-end px-4 py-3">
              <button className="rounded-full h-10 px-4 bg-[#0b79ee] text-sm font-bold text-white">
                <span className="truncate">Submit Request</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
