import TempCard from "../shared/card/TempCard";
import { TempCardData } from "../../db/mockdata";

const ExampleTemplates = () => {
  return (
    <>
      <div className="w-11/12 mx-auto pt-30 mb-10">
        <div className="flex flex-col items-center">
          <h3 className="text-[#fdfdfd] text-3xl">Start building in seconds</h3>
          <p className="text-sm my-6">
            Kickstart your next project with templates built by us and our
            community.
          </p>
          <div className="flex gap-2">
            <button className="text-[#fdfdfd] bg-[#242424] px-4 py-2 text-sm rounded-lg">
              View all examples
            </button>
            <button className="flex gap-2 items-center text-[#fdfdfd] bg-[#242424] px-4 py-2 text-sm rounded-lg">
              <img
                className="h-5 w-5"
                src="/github-logo.svg"
                alt="github-logo"
              />
              Official Github Library
            </button>
          </div>
        </div>
        <div className="pt-10 px-20 grid grid-cols-3 gap-5">
          {TempCardData.map((key) => (
            <TempCard img={key.img} title={key.title} desc={key.desc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExampleTemplates;
