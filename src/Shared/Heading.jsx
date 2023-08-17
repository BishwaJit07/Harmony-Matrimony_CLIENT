const Heading = ({title}) => {
    return (
      <div className="">
        <h1 className="text-red-600 border-b-2 border-red-600 w-fit mx-auto p-2 text-2xl font-bold">
          {title}
        </h1>
        <div className="">
          <img src='https://i.ibb.co/swBsp3p/flower.png' alt="" className="lg:w-[15%] w-[60%] md:w-[40%] mx-auto -mt-2 mb-10" />
        </div>
      </div>
    );
  };
  
  export default Heading;