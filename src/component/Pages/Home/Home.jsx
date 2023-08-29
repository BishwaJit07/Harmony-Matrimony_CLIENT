
import About from "./HomeCompnent/About";
import BestRecommendation from "./HomeCompnent/BestRecommendation/BestRecommendation";

import Gallary from "./HomeCompnent/gellary/Gallary";

import HappyStory from './HomeCompnent/HappyStory/HappyStory';
import { Helmet } from "react-helmet";
import HomeBanner from "./HomeCompnent/HomeBanner/HomeBanner";
import MessageUsFb from "../../FacebookMessage/MessageUsFb";

const Home = () => {

  return (
    <div className="">

      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Home</title>
      </Helmet>

      {/* <HeroSection /> */}
      <HomeBanner />
      <div className="w-[80%] mx-auto">
        {/* <SearchFunction></SearchFunction> */}
        <BestRecommendation />
        <Gallary />
        <About />
        <HappyStory />
        <MessageUsFb/>
      </div>
    </div>
  );

  }
export default Home;


