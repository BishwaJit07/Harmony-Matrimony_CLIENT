import { useEffect, useState } from "react";
import HappyStoryCard from "./HappyStoryCard";

const HappyStory = () => {
  const [happyStories, setHappyStories] = useState([])

  // fetch happyStories data
  useEffect( () => {
    fetch('https://harmony-matrimony-server.vercel.app/allCouple')
      .then(res => res.json())
      .then(data => setHappyStories(data))
  }, [])
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          happyStories.map(happyStory => <HappyStoryCard key={happyStory._id} happyStory={happyStory} />)
        }
      </div>
      
    </div>
  );
};

export default HappyStory;