import ReviewCard from "../shared/card/reviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Reviews = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 8000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="w-11/12 mx-auto relative">
        <div className="flex flex-col items-center">
          <h3 className="text-[#fdfdfd] text-3xl">Join the community</h3>
          <p className="text-sm my-6">
            Discover what our community has to say about their Supabase
            experience.
          </p>
          <div className="flex gap-2">
            <button className="flex gap-2 items-center text-[#fdfdfd] bg-[#242424] px-4 py-2 text-sm rounded-lg">
              <span>GitHub discussions</span>
              <img
                className="h-5 w-5 opacity-50"
                src="./homepage/chat-icon.svg"
                alt="github-logo"
              />
            </button>
            <button className="flex gap-2 items-center text-[#fdfdfd] bg-[#242424] px-4 py-2 text-sm rounded-lg">
              <span>Discord</span>
              <img
                className="h-5 w-5 opacity-50"
                src="./homepage/chat-icon.svg"
                alt="github-logo"
              />
            </button>
          </div>
        </div>

        <div className="mt-6">
          <Slider {...settings}>
            <div className="p-4">
              <div>
                <ReviewCard />
              </div>

              <div className="mt-6">
                <ReviewCard />
              </div>
            </div>

            <div className="p-4">
              <div>
                <ReviewCard />
              </div>

              <div className="mt-6">
                <ReviewCard />
              </div>
            </div>

            <div className="p-4">
              <div>
                <ReviewCard />
              </div>

              <div className="mt-6">
                <ReviewCard />
              </div>
            </div>

            <div className="p-4">
              <div>
                <ReviewCard />
              </div>

              <div className="mt-6">
                <ReviewCard />
              </div>
            </div>
          </Slider>
        </div>
        <div className="w-full bg-radial from-transparent to-[#121212] h-[500px] absolute top-42 left-0"></div>
      </div>
    </>
  );
};

export default Reviews;
