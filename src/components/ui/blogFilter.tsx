import { useState } from "react";
import { BlogList, BlogTabs } from "../../db/mockdata";

interface BlogItem {
  blogTitle: string;
  blogImg: any;
  blogType: string;
  blogDate: string;
}

const BlogFilter = () => {
  const [isTabActive, setTabActive] = useState(0);
  const [isBlogHoverIndex, setBlogHoverIndex] = useState<number | null>(null);
  return (
    <>
      <div className="mb-30 border-t border-t-zinc-800">
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
          <div>
            {BlogList.map((key: BlogItem, index: number) => (
              <div
                onMouseEnter={() => setBlogHoverIndex(index)}
                onMouseLeave={() => setBlogHoverIndex(null)}
                key={index}
                className="px-8 py-2 border-t border-t-zinc-800 flex justify-between cursor-pointer"
              >
                <div className="">
                  <h2
                    className={`${
                      isBlogHoverIndex === index &&
                      "underline decoration-[#fdfdfd]"
                    } text-[#fdfdfd] text-lg offset-2 py-2`}
                  >
                    {key.blogTitle}
                  </h2>
                </div>
                <div className=" w-[35%] flex justify-between items-center">
                  <div className="w-[30%] flex">
                    {key.blogImg.map((k: any, i: any) => (
                      <img
                        className={`w-6 h-6 rounded-4xl ${i !== 0 && "-ml-3"}`}
                        src={k}
                        alt="Blog-image"
                      />
                    ))}
                  </div>
                  <div className="w-[30%] flex items-start">
                    <div
                      className={`text-[11px] text-[#cacaca] px-2 py-1 rounded-2xl border ${
                        isBlogHoverIndex === index
                          ? "border-zinc-500"
                          : "border-zinc-700"
                      }`}
                    >
                      {key.blogType}
                    </div>
                  </div>
                  <div className="[w-30%]">
                    <div
                      className={`text-sm ${
                        isBlogHoverIndex === index && "text-[#bdbdbd]"
                      }`}
                    >
                      {key.blogDate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogFilter;
