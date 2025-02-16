const ReviewCard = (props: any) => {
  return (
    <>
      <div>
        <div className="p-6 mb-4 bg-[#171717] border border-zinc-600 hover:border-zinc-500 rounded-2xl cursor-pointer">
          <div className="flex gap-1.5 items-center">
            <div className="relative">
              <img
                className="w-8 h-8 object-cover rounded-4xl"
                src={props.imgTop}
                alt="review-img"
              />
              <div className="w-3 h-3 bg-black rounded-4xl absolute top-0 -left-1 p-0.5">
                <img
                  className="object-cover"
                  src="./homepage/twitter-x-icon.svg"
                  alt="twitter-x"
                />
              </div>
            </div>

            <div className="">
              <h3 className="text-sm text-[#fdfdfd]">{props.usernameTop}</h3>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm">"{props.reviewParagraphTop}"</p>
          </div>
        </div>

        <div className="p-6 bg-[#171717] border border-zinc-600 hover:border-zinc-500 rounded-2xl cursor-pointer">
          <div className="flex gap-1.5 items-center">
            <div className="relative">
              <img
                className="w-8 h-8 object-cover rounded-4xl"
                src={props.imgBottom}
                alt="review-img"
              />
              <div className="w-3 h-3 bg-black rounded-4xl absolute top-0 -left-1 p-0.5">
                <img
                  className="object-cover"
                  src="./homepage/twitter-x-icon.svg"
                  alt="twitter-x"
                />
              </div>
            </div>

            <div className="">
              <h3 className="text-sm text-[#fdfdfd]">{props.usernameBottom}</h3>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm">"{props.reviewParagraphBottom}"</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
