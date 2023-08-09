import About from "./HomeCompnent/About";
import BestRecommendation from "./HomeCompnent/BestRecommendation/BestRecommendation";
import HeroSection from "./HomeCompnent/HeroSection";
import Gallary from "./HomeCompnent/gellary/Gallary";


const Home = () => {
  return (
    <div className="text-cener text-3xl">
      Home Page
      <HeroSection />
      <BestRecommendation/>
      <Gallary />
      <About/>
    </div>
  );
};

export default Home;
