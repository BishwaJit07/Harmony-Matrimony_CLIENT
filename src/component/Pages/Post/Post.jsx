const Post = () => {
  return (
    <div className="mt-8">
      {/* top-bar */}
      <div className="flex justify-between items-center mx-auto max-w-screen-xl shadow-xl">
        <div className="flex items-center gap-2 p-4">
          <img
            src="/vite.svg"
            alt=""
            width="80"
            height="80"
            className="border-2 border-[#8AE7DB] rounded-full p-1"
          />
          <h1>Age:</h1>
        </div>
        <div className="p-2 bg-[#FF725E] rounded-full mr-4 border-2 border-[#8AE7DB] ">
          <img src="/vite.svg" alt="" width="20" height="20" />
        </div>
      </div>
      {/* top-bar-end */}

      <div className="mt-8 max-w-screen-xl gap-7 mx-auto flex justify-between items-start">
        {/* card-start */}
          <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden w-1/4">
            <div className="p-8">
              <div className="mt-4">
                <p>Phone:</p>
                <p>Email</p>
                <h3 className="font-semibold">Bio</h3>
              </div>
              {/* More Info Button */}
              <div className="mt-4">
                <h3 className="font-semibold">More Info</h3>
              </div>
              {/* Chat and Follow Buttons */}
              <div className="flex">
                <button className=" bg-[#FF725E] hover:bg-[#FF725E] text-white font-bold py-2 px-4 rounded">
                  Chat
                </button>
                <button className=" ml-2 bg-[#FF725E] hover:bg-[#FF725E] text-white font-bold py-2 px-4 rounded">
                  Follow
                </button>
              </div>
            </div>
          </div>
        
      <div className="my-2 flex justify-between w-3/4">
        <button className="bg-[#FF725E] text-center w-[100%] text-white py-2 rounded">Post</button>
        <button className="bg-[#FF725E] text-center  w-[100%]  text-white py-2 rounded">Followers</button>
      </div>
        {/* card-end*/}
      </div>
    </div>
  );
};

export default Post;
