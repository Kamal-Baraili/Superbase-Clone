const BlogHero = () => {
  return (
    <>
      <div className="w-11/12 mx-auto my-9">
        <div className="p-5 flex gap-12 hover:bg-[#171717] cursor-pointer">
          <div className="w-auto border border-zinc-800 rounded-lg">
            <img
              className="w-[550px] h-[370px] rounded-lg"
              src="./blogs/blog-hero-image.png"
              alt="blog-image"
            />
          </div>
          <div className="w-[40%] h-[370px] py-28">
            <div className="flex gap-2 items-center text-[13px]">
              <span>20 December 2024</span>
              <div className="w-1.5 h-1.5 rounded-4xl bg-[#878787]"></div>
              <span>4 minute read</span>
            </div>
            <h2 className="text-[#fdfdfd] text-3xl my-2">
              AI Hackathon at Y Combinator
            </h2>
            <h3 className="font-semibold">
              Announcing the winners of the Supabase AI Hackathon.
            </h3>
            <div className="flex gap-2 mt-6 items-center">
              <img
                className="w-6 h-6 rounded-4xl"
                src="./blogs/blog-image.png"
                alt=""
              />
              <h4 className="text-[13px] text-[#fdfdfd]">Craig Cannon</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
