import { HeroLogos } from "../../db/mockdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <>
      <div className="h-[80vh]">
        <div className="w-11/12 mx-auto mt-10">
          <div className="w-1/2 mx-auto h-full">
            <h1 className="text-[#fdfdfd] text-6xl px-2 pt-28 text-center">
              Build in a weekend{" "}
              <span className="text-primary">Scale to millions</span>
            </h1>
            <p className="text-[#fdfdfd] text-lg text-center px-4 pt-8">
              Supabase is an open source Firebase alternative. Start your
              project with a Postgres database, Authentication, instant APIs,
              Edge Functions, Realtime subscriptions, Storage, and Vector
              embeddings.
            </p>
            <div className="pt-10 flex gap-2.5 justify-center">
              <button className="text-[#fdfdfd] bg-[#287050] px-4 py-2 text-sm rounded-md">
                Start your project
              </button>
              <button className="text-[#fdfdfd] bg-[#242424] px-4 py-2 text-sm rounded-md">
                Request a demo
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 w-11/12 mx-auto">
          <div className="w-1/2 mx-auto relative">
            <Slider {...settings}>
              {HeroLogos.map((key, index) => (
                <div className="" key={index}>
                  <img className="w-28 h-12 px-1" src={key} alt="hero-logos" />
                </div>
              ))}
            </Slider>
            <div className="w-full mx-auto absolute inset-0 z-10 flex justify-between">
              <div className="w-20 h-12 bg-gradient-to-r from-[#121212] to-transparent"></div>

              <div className="w-20 h-12 bg-gradient-to-l from-[#121212] to-transparent"></div>
            </div>
          </div>
          <p className="text-[#848484] text-[13px] text-center pt-7">
            Trusted by fast-growing companies worldwide
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
