
import About from "./HomeCompnent/About";


import Gallary from "./HomeCompnent/gellary/Gallary";

import HappyStory from './HomeCompnent/HappyStory/HappyStory';
import { Helmet } from "react-helmet";
import HomeBanner from "./HomeCompnent/HomeBanner/HomeBanner";
import MessageUsFb from "../../FacebookMessage/MessageUsFb";

import HowItWork from "./HowItWork/HowItWork";

import WhyChooseUs2 from "./HomeCompnent/WhyChooseUs2/WhyChooseUs2";
import BestRecommendation2 from "./HomeCompnent/BestRecommendation2/BestRecommendation2";


const Home = () => {

  return (
    <div className="">

      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Home</title>
      </Helmet>

      {/* <HeroSection /> */}
  
      <div className="w-[80%] mx-auto">
        
            <HomeBanner />
         <HowItWork></HowItWork>
          <WhyChooseUs2 />
        {/* <SearchFunction></SearchFunction> */}
        {/* <BestRecommendation /> */}
        <BestRecommendation2 />
        <Gallary />
        <About />
        <HappyStory />
        <MessageUsFb/>
        
      </div>
    </div>
  );

  }
export default Home;


