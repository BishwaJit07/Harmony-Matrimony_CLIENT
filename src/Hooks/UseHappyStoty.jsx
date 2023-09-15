import  { useEffect, useState } from 'react';

const UseHappyStoty = () => {
    const [happyStories, setHappyStories] = useState([])

    // fetch happyStories data
    useEffect(() => {
      fetch('http://localhost:5000/allCouple')
        .then(res => res.json())
        .then(data => setHappyStories(data))
    }, [])

    return [happyStories]
    ;
};

export default UseHappyStoty;