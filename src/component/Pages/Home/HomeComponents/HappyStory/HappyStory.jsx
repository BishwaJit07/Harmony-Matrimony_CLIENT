import { useEffect, useState } from "react";
import HappyStoryCard from "./HappyStoryCard";
import flower from "../../../../../../public/flower.png"
const HappyStory = () => {
  const [happyStories, setHappyStories] = useState([])

  // fetch happyStories data
  useEffect( () => {
    fetch('https://harmony-matrimony-server.vercel.app/allCouple')
      .then(res => res.json())
      .then(data => setHappyStories(data))
  }, [])
  
  return (
    <div className="my-60">
       <h1 className="text-red-600 font-bold border-b-2 border-red-600 w-fit mx-auto p-2">
        Happy Story
      </h1>
        <div className="">
          <img src={flower} alt="" className="lg:w-[15%] w-[60%] md:w-[40%] mx-auto -mt-2 mb-10"/>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {
          happyStories.map(happyStory => <HappyStoryCard key={happyStory._id} happyStory={happyStory} />)
        }
      </div>
      
    </div>
  );
};

export default HappyStory;