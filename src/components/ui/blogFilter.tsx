import { useState } from "react";

const BlogFilter = () => {
  const [isTabActive, setTabActive] = useState(0);
  return (
    <>
      <div className="mb-10 border-t border-t-zinc-800">
        <div className="w-11/12 mx-auto">
          <div className="my-10 flex justify-between">
            <div className="flex gap-3 ">
              {BlogTabs.map((key, index) => (
                <div
                  key={index}
                  className={`p-4 text-sm py-2 border rounded-4xl cursor-pointer text-[#fdfdfd] ${
                    index === isTabActive
                      ? "border-zinc-600 bg-[#171717]"
                      : "border-zinc-800 hover:border-zinc-600"
                  }`}
                  onClick={() => setTabActive(index)}
                >
                  {key}
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <div className="w-[300px] bg-[#171717] flex gap-3 items-center px-2 border border-zinc-600 rounded">
                <img
                  className="opacity-90"
                  src="./blogs/search-icon.svg"
                  alt="search-icon"
                />
                <input
                  className="outline-none text-sm"
                  type="text"
                  placeholder="Search blog"
                />
              </div>

              <div className="bg-[#242424] px-3 rounded-lg border border-zinc-600 flex items-center justify-center">
                <img
                  className="w-4 h-4"
                  src="./blogs/grid-icon.svg"
                  alt="grid-icon"
                />
              </div>
            </div>
          </div>
          <div>blogtitles</div>
        </div>
      </div>
    </>
  );
};

export default BlogFilter;

const BlogTabs = [
  "All",
  "Product",
  "Company",
  "Postgress",
  "Developers",
  "Engineering",
  "Launch Week",
];
