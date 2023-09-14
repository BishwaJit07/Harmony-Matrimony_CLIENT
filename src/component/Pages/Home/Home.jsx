

import Gallary from "./HomeCompnent/gellary/Gallary";

import HappyStory from './HomeCompnent/HappyStory/HappyStory';
import { Helmet } from "react-helmet";
import MessageUsFb from "../../FacebookMessage/MessageUsFb";
import Review from "./Review/Review";
import Review2 from "./Review/Review2";
import HowItWork from "./HowItWork/HowItWork";

import HomeBanner from "./HomeCompnent/HomeBanner/HomeBanner";
import SweetMemories from "./HomeCompnent/SweetMemorise/SweetMemories";

import BestRecommendation2 from "./HomeCompnent/BestRecommendation2/BestRecommendation2";
import WhyChooseUs2 from "./HomeCompnent/WhyChooseUs2/WhyChooseUs2";
import Gallery from "./HomeCompnent/gellary/Gallery";



const Home = () => {
  return (

    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Soulmate | Home</title>
    </Helmet>
    <div className=" overflow-x-hidden md:overflow-visible lg:overflow-x-hidden">
    <HomeBanner></HomeBanner>
    <HowItWork/>
    <WhyChooseUs2></WhyChooseUs2>
    <BestRecommendation2 />
    <div className="w-[80%] mx-auto">

      {/* <SearchFunction></SearchFunction> */}
      {/* <BestRecommendation /> */}


      <Gallary />
      {/* <SweetMemories/> */}
      <Review />
    </div>
  

    </div>
  </>
  );
}
export default Home;


