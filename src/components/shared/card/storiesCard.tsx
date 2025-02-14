import { useState } from "react";

const StoriesCard = () => {
  const [isStoryCardHover, setStoryCardHover] = useState(false);
  return (
    <>
      <div>
        <div
          onMouseEnter={() => setStoryCardHover(true)}
          onMouseLeave={() => setStoryCardHover(false)}
          className="w-full grid grid-cols-3 gap-4 p-2 cursor-pointer"
        >
          <div className="bg-[#171717] p-8 col-span-2 border border-zinc-700 hover:border-zinc-600 rounded-xl">
            <div className="flex justify-between items-center">
              <img
                className={`w-40 h-10 ${
                  isStoryCardHover == true ? "opacity-80" : "opacity-50"
                }`}
                src="./homepage/maergo.png"
                alt="maergo"
              />
              <img
                className={`w-7 h-7 ${
                  isStoryCardHover == true ? "opacity-50" : "opacity-0"
                }`}
                src="./homepage/arrow-up-right.svg"
                alt="arrow"
              />
            </div>
            <p className="mt-32">
              Maergo's Express Delivery: How Supabase Helped Achieve
              Scalability, Speed, and Cost Saving
            </p>
          </div>

          <div className="cols-span-1 grid grid-cols-1 gap-4">
            <div className="bg-[#171717] border border-zinc-700 hover:border-zinc-600 rounded-xl flex justify-center items-center">
              <img src="./homepage/1password.svg" alt="1password" />
            </div>
            <div className="bg-[#171717] border border-zinc-700 hover:border-zinc-600 rounded-xl flex justify-center items-center">
              <img src="./homepage/mozilla.svg" alt="mozlla" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoriesCard;
