import { useNavigate } from 'react-router-dom';

export default function ReportsDashboard() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden font-sans">
      <div className="flex h-full flex-col">
       

        <div className="px-4 md:px-40 flex flex-1 justify-center py-5 overflow-x-auto">
          <div className="flex flex-col max-w-[960px] w-full">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[32px] font-bold text-[#111418]">Reports</p>
                <p className="text-sm text-[#60758a]">View analytics for your campaigns</p>
              </div>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <select className="h-14 rounded-xl border border-[#dbe0e6] p-4 text-base text-[#111418]">
                  <option value="one"></option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>

            <div className="flex flex-wrap gap-4 px-4 py-6">
              {[{
                title: 'Sentiment Pie Chart',
                label: 'Positive',
                bars: [80, 20, 20],
                labels: ['Positive', 'Neutral', 'Negative']
              }, {
                title: 'Emotion Bar Graph',
                label: 'Joy',
                bars: [20, 90, 40, 80, 40],
                labels: ['Joy', 'Sadness', 'Anger', 'Fear', 'Surprise']
              }, {
                title: 'Keyword Cloud',
                label: 'Keywords',
                bars: [90, 90, 50, 60, 60, 60, 40],
                labels: ['Keyword 1', 'Keyword 2', 'Keyword 3', 'Keyword 4', 'Keyword 5', 'Keyword 6', 'Keyword 7']
              }].map((block, i) => (
                <div key={i} className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#dbe0e6] p-6 overflow-hidden">
                  <p className="text-base font-medium text-[#111418] truncate">{block.title}</p>
                  <p className="text-[32px] font-bold text-[#111418] truncate">{block.label}</p>
                  <div className="grid min-h-[180px] grid-flow-col grid-rows-[1fr_auto] items-end justify-items-center gap-6 px-3 overflow-x-auto">
                    {block.bars.map((height, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div className="w-full border-t-2 bg-[#f0f2f5] border-[#60758a]" style={{ height: `${height}%` }}></div>
                        <p className="text-[13px] font-bold text-[#60758a] truncate w-full text-center">{block.labels[idx]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 px-4 py-3">
              {['Download PDF', 'Download CSV', 'Share via Email'].map((label) => (
                <button
                  key={label}
                  className="rounded-full h-10 px-4 bg-[#f0f2f5] text-sm font-bold text-[#111418]"
                >
                  <span className="truncate">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
