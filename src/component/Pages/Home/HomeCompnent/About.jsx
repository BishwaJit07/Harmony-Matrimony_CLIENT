import React from 'react';

const About = () => {
    return (
        <div>
            <div className="  m-2">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <div className="text-red-600">
          <h2 className="text-xl">About <span className=" font-serif decoration-red-700 text-3xl">"SoulMate Matrimony"</span></h2>
        </div>
        <div className=" ">Welcome to Soulmate Matrimony, the ultimate destination for individuals seeking a lifelong partnership built on trust, compatibility, and love.</div>
        <div><img className="rounded" src="https://i.ibb.co/yNXcGc3/Wedding-at-OMG-Villa-Bali.jpg" alt="" /></div>

        <div></div>
        <div> <img className="rounded" src="https://i.ibb.co/h18P50G/01197-619-M-1-1024x683.jpg" alt="" /></div>
      </div>
      <div></div>
    </div>
        </div>
    );
};

export default About;