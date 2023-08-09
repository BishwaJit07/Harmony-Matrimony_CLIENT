import About from "./HomeCompnent/About";
import HeroSection from "./HomeCompnent/HeroSection";
import Gallary from "./HomeCompnent/gellary/Gallary";
import HappyStory from './HomeComponents/HappyStory/HappyStory';

const Home = () => {
  return (
    <div className="text-center text-3xl">
      Home Page
      <HeroSection />
      <Gallary />
      <About />
      <HappyStory />
    </div>
  );
};

export default Home;

