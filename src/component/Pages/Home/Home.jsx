
import BestRecommendation from "./HomeCompnent/BestRecommendation/BestRecommendation";

import Gallary from "./HomeCompnent/gellary/Gallary";

import HappyStory from './HomeCompnent/HappyStory/HappyStory';
import { Helmet } from "react-helmet";
import MessageUsFb from "../../FacebookMessage/MessageUsFb";

import HowItWork from "./HowItWork/HowItWork";

import WhyChooseUs2 from "./HomeCompnent/WhyChooseUs2/WhyChooseUs2";
import HomeBanner from "./HomeCompnent/HomeBanner/HomeBanner";


const Home = () => {

  return (
    <div className="">

      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Home</title>
      </Helmet>

      <div>
        <HomeBanner />
        <HowItWork></HowItWork>
      </div>
      <WhyChooseUs2 />
      <div className="w-[80%] mx-auto">
        <BestRecommendation />
        <Gallary />
        <HappyStory />
        <MessageUsFb />

      </div>
    </div>
  );

}
export default Home;


