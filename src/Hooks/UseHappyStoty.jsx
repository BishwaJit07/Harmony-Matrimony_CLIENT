import  { useEffect, useState } from 'react';

const UseHappyStoty = () => {
    const [happyStories, setHappyStories] = useState([])

    // fetch happyStories data
    useEffect(() => {
      fetch('https://harmony-matrimony-server.vercel.app/allCouple')
        .then(res => res.json())
        .then(data => setHappyStories(data))
    }, [])

    return [happyStories]
    ;
};

export default UseHappyStoty;