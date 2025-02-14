import StoriesCard from "../shared/card/storiesCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { StoriesCardData } from "../../db/mockdata";

const Stories = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 15000,
    autoplaySpeed: 15000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  return (
    <>
      <div className="pt-20 pb-8">
        <div className="w-11/12 mx-auto flex justify-between items-end">
          <div className="w-1/2">
            <h6 className="uppercase text-[13px]">Customer Stories</h6>
            <h3 className="mt-6 text-3xl">
              <span className="text-[#fdfdfd]">Infrastructure</span> to innovate
            </h3>
            <h3 className="mb-6 text-3xl">and scale with ease.</h3>
            <p className="text-lg">
              See how Supabase empowers companies of all sizes to accelerate
              their growth and streamline their work.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
              <h4 className="text-[#fdfdfd] text-[12px] px-3 py-1 rounded-lg bg-[#287050] cursor-pointer">
                View all stories
              </h4>
            </div>
            <div>
              <h4 className="text-[#fdfdfd] text-[12px] px-3 py-1 rounded-lg bg-[#242424] cursor-pointer">
                View Events
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Slider {...settings}>
            {StoriesCardData.map((key) => (
              <StoriesCard
                mainImg={key.mainImg}
                paragraph={key.paragraph}
                img1={key.img1}
                img2={key.img2}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Stories;
