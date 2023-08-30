import Gallary from "./HomeCompnent/gellary/Gallary";

import HappyStory from "./HomeCompnent/HappyStory/HappyStory";
import { Helmet } from "react-helmet";
import MessageUsFb from "../../FacebookMessage/MessageUsFb";
import Review from "./Review/Review";

import HowItWork from "./HowItWork/HowItWork";
import HeroSection from "./HomeCompnent/HeroSection";
import BestRecommendation2 from "./HomeCompnent/BestRecommendation2/BestRecommendation2";
import SearchFunction from "./SearchFunction/SearchFunction";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Home</title>
      </Helmet>

      <HeroSection />

      

      <div className="w-[80%] mx-auto">
      
        <SearchFunction></SearchFunction>
        <BestRecommendation2 />
        <HowItWork />
        <Gallary />
        <HappyStory />
        <Review />
        <MessageUsFb />
      </div>
    </div>
  );
};
export default Home;
