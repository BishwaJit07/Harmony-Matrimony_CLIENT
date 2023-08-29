
import About from "./HomeCompnent/About";
import BestRecommendation from "./HomeCompnent/BestRecommendation/BestRecommendation";
import HeroSection from "./HomeCompnent/HeroSection";
import Gallary from "./HomeCompnent/gellary/Gallary";
import SearchFunction from "./SearchFunction/SearchFunction";

import HappyStory from './HomeCompnent/HappyStory/HappyStory';
import { Helmet } from "react-helmet";
import MessageUsFb from "../../FacebookMessage/MessageUsFb";
import Review from "./Review/Review";

const Home = () => {

  return (
    <div className="text-center text-3xl">

      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Home</title>
      </Helmet>

      <HeroSection />
        <Review></Review>
      <div className="w-[80%] mx-auto">
        <SearchFunction></SearchFunction>
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


