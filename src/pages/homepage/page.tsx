import Hero from "../../components/ui/Hero";
import Services from "../../components/ui/services";
import Stories from "../../components/ui/Stories";
import ExampleTemplates from "../../components/ui/ExampleTemplates";
import VideoTabs from "../../components/shared/card/videoTab";
import Reviews from "../../components/ui/reviews";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Stories />
      <ExampleTemplates />
      <VideoTabs />
      <Reviews />
    </>
  );
};

export default Homepage;
