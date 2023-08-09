import About from './HomeCompnent/About';
import SearchFunction from './SearchFunction/SearchFunction';

const Home = () => {
    return (
        <div className='text-cener text-3xl'>
           Home Page
           <About/>
           <SearchFunction></SearchFunction>
        </div>
    );
};

export default Home;