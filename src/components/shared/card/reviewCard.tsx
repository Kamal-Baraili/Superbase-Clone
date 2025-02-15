const ReviewCard = () => {
  return (
    <>
      <div className="p-6 bg-[#171717] border border-zinc-600 hover:border-zinc-500 rounded-2xl cursor-pointer">
        <div className="flex gap-1.5 items-center">
          <div className="relative">
            <img
              className="w-8 h-8 object-cover rounded-4xl"
              src="./homepage/review-img1.png"
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
            <h3 className="text-sm text-[#fdfdfd]">@PaoloRicciuti</h3>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            voluptas asperiores cumque veniam perferendis maxime dignissimos
            commodi. Dolorum amet vero iste tenetur labore eveniet quas."
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
