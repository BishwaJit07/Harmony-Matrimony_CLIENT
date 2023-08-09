import About from "./HomeCompnent/About";
import Gallary from "./HomeCompnent/gellary/Gallary";


const Home = () => {
  return (
    <div className="text-cener text-3xl">
      Home Page
      <Gallary />
      <About/>
    </div>
  );
};

export default Home;
