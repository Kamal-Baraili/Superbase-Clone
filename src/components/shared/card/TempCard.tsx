import { useState } from "react";

const TempCard = (props: any) => {
  const [isTempHover, setTempHover] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setTempHover(true)}
        onMouseLeave={() => setTempHover(false)}
        className="bg-[#171717] border border-zinc-600 hover:border-zinc-500 rounded-2xl cursor-pointer"
      >
        <div className="p-8 m-1 flex justify-center bg-[#121212] gap-6">
          {props.img.map((key: any, index: any) => (
            <div key={index}>
              <img className="w-12 h-12 opacity-60" src={key} alt="icons" />
            </div>
          ))}
        </div>
        <div className="px-4 py-6">
          <div className="">
            <h2 className="text[#fdfdfd] text-lg text-[#fdfdfd]">
              {props.title}
            </h2>
            <p className="text-sm my-4">{props.desc}</p>
          </div>
          <div className="text-[12px] flex gap-1 items-center">
            <span className={`${isTempHover && "text-[#fdfdfd]"}`}>
              View Template
            </span>
            <img
              className="w-4 h-4"
              src="./homepage/arrow-up-right.svg"
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TempCard;
