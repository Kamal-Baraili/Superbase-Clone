import { useState } from "react";

const HeroCard = (props: any) => {
  const [isHover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${props.ind === 0 ? "flex gap-4 py-7" : "py-8"}`}
    >
      <div className={`${props.ind === 0 ? "w-1/2" : ""}`}>
        <div className="flex gap-2 items-center">
          <img className="h-5 w-5" src={props.iconSrc} alt="card-icon" />
          <h3 className="text-[#fdfdfd] text-[15px]">{props.title}</h3>
        </div>

        <p className="py-4 text-[13px]">{props.paragraph}</p>

        {props.ind === 0 && (
          <div className="mt-36">
            <div className="flex gap-1">
              <img
                className="w-4 h-4"
                src="./homepage/check-right-icon.svg"
                alt="check"
              />
              <h3 className="text-[#fdfdfd] text-sm">100% portable</h3>
            </div>
            <div className="flex gap-1">
              <img
                className="w-4 h-4"
                src="./homepage/check-right-icon.svg"
                alt="check"
              />
              <h3 className="text-[#fdfdfd] text-sm">
                {" "}
                Built-in Auth with RLS
              </h3>
            </div>
            <div className="flex gap-1">
              <img
                className="w-4 h-4"
                src="./homepage/check-right-icon.svg"
                alt="check"
              />
              <h3 className="text-[#fdfdfd] text-sm">Easy to extend</h3>
            </div>
          </div>
        )}
      </div>
      <div className={`${props.ind === 0 ? "w-1/2 p-6 py-18 m-0" : "mt-5"}`}>
        <img
          className={`h-48 w-full transition ease-in-out duration-300 opacity-80 ${
            props.ind === 0 ? "object-cover" : "object-contain"
          } ${isHover && "rotate-180"}`}
          src={props.cardImage}
          alt="card-img"
        />
      </div>
    </div>
  );
};

export default HeroCard;
