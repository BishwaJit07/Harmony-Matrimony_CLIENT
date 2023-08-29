
import About from "./HomeCompnent/About";
import BestRecommendation from "./HomeCompnent/BestRecommendation/BestRecommendation";
import HeroSection from "./HomeCompnent/HeroSection";
import Gallary from "./HomeCompnent/gellary/Gallary";
import SearchFunction from "./SearchFunction/SearchFunction";
import HappyStory from './HomeCompnent/HappyStory/HappyStory';
import { Helmet } from "react-helmet";
import HomeBanner from "./HomeCompnent/HomeBanner/HomeBanner";
import MessageUsFb from "../../FacebookMessage/MessageUsFb";
import WhyChooseUs2 from "./HomeCompnent/WhyChooseUs2/WhyChooseUs2";

const Home = () => {

  return (
    <div className="">

      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Home</title>
      </Helmet>

      {/* <HeroSection /> */}
      <HomeBanner />
      <div className=" mx-auto">
        <SearchFunction></SearchFunction>
        <WhyChooseUs2 />
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


