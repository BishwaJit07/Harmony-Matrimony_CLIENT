
import Gallary from "./HomeCompnent/gellary/Gallary";
import HappyStory from "./HomeCompnent/HappyStory/HappyStory";
import { Helmet } from "react-helmet";
import MessageUsFb from "../../FacebookMessage/MessageUsFb";
import Review from "./Review/Review";
import HowItWork from "./HowItWork/HowItWork";
import BestRecommendation2 from "./HomeCompnent/BestRecommendation2/BestRecommendation2";
import HomeBanner from "./HomeCompnent/HomeBanner/HomeBanner";
import SweetMemories from "./HomeCompnent/SweetMemorise/SweetMemories";


const Home = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Home</title>
      </Helmet>
 

      

      <HomeBanner/>
      <HowItWork />
      <BestRecommendation2 />
     
      <div className="w-[80%] mx-auto">
      
      
       <SweetMemories/>
        <HappyStory />
        <Review />
       
        <MessageUsFb />
      </div>
    </div>
  );
};
export default Home;
