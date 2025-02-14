import { useState } from "react";

const VideoTabs = () => {
  const [isActive, setIsActive] = useState(0);
  return (
    <>
      <div className="w-11/12 mx-auto my-40">
        <div className="">
          <h3 className="text-3xl text-[#fdfdfd] text-center">
            Stay productive and manage your app
          </h3>
          <h3 className="text-3xl text-center">
            without leaving the dashboard
          </h3>
        </div>

        <div className="my-10 flex gap-3 justify-center">
          {Tabs.map((key, index) => (
            <div
              key={index}
              className={`px-8 text-sm py-2 border rounded-4xl cursor-pointer ${
                index === isActive
                  ? "border-white text-white"
                  : "border-zinc-700 hover:border-zinc-500"
              }`}
              onClick={() => setIsActive(index)}
            >
              {key}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center my-10">
          <div className="w-auto mx-auto flex gap-6 items-center">
            {TabFeatures[isActive].features.map((key, index) => (
              <div
                key={index}
                className="flex gap-1 items-center opacity-60 cursor-pointer hover:opacity-100 underline-offset-2 decoration-[#fdfdfd] hover:underline"
              >
                <img src="./homepage/check-right-icon.svg" alt="" />
                <span className="text-sm text-[#fdfdfd]">{key}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-11/12 mx-auto">
          <div className="w-[90%] mx-auto p-3 border border-zinc-700 rounded-2xl">
            <div className="w-12 flex gap-2 mb-2 px-1">
              <div className="w-2 h-2 bg-[#595959] rounded-4xl"></div>
              <div className="w-2 h-2 bg-[#595959] rounded-4xl"></div>
              <div className="w-2 h-2 bg-[#595959] rounded-4xl"></div>
            </div>
            <div className="h-[82vh] border border-zinc-700 rounded-2xl">
              <video
                className="object-cover rounded-2xl"
                autoPlay
                loop
                src={VideoData[isActive]}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoTabs;

const Tabs = ["Table Editor", "SQL Editor", "RLS Policies"];

const TabFeatures = [
  {
    features: [
      "Full CRUD",
      "Materialized Views",
      "Foreign Tables",
      "Partitioned Tables",
      "Easy as a spreadsheet",
    ],
  },

  {
    features: [
      "AI SQL Editor",
      "Row Level Security",
      "Save time using Templates",
      "Save and reuse Queries",
    ],
  },

  {
    features: [
      "Email Logins",
      "Magic Links",
      "20+ Third-party Logins",
      "Custom Access Policies via RLS",
      "Password Recovery",
    ],
  },
];

const VideoData = [
  "./homepage/table-editor.mp4",
  "./homepage/sql-editor.mp4",
  "./homepage/rls.mp4",
];
