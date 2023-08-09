import About from "./HomeCompnent/About";
import HeroSection from "./HomeCompnent/HeroSection";
import Gallary from "./HomeCompnent/gellary/Gallary";
import SearchFunction from "./SearchFunction/SearchFunction";


const Home = () => {
  return (
    <div className="text-cener text-3xl">
      Home Page
      <HeroSection />
      <SearchFunction></SearchFunction>
      <Gallary />
      <About/>
    </div>
  );
};

export default Home;
