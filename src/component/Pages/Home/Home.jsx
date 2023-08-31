import Gallary from "./HomeCompnent/gellary/Gallary";

import HappyStory from "./HomeCompnent/HappyStory/HappyStory";
import { Helmet } from "react-helmet";
import MessageUsFb from "../../FacebookMessage/MessageUsFb";
import Review from "./Review/Review";

import HowItWork from "./HowItWork/HowItWork";

import BestRecommendation2 from "./HomeCompnent/BestRecommendation2/BestRecommendation2";

import HomeBanner from "./HomeCompnent/HomeBanner/HomeBanner";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Home</title>
      </Helmet>

      

      <HomeBanner/>
      <HowItWork />
      <div className="w-[80%] mx-auto">
      
       
        <BestRecommendation2 />
     
        <Gallary />
        <HappyStory />
        <Review />
        <MessageUsFb />
      </div>
    </div>
  );
};
export default Home;
