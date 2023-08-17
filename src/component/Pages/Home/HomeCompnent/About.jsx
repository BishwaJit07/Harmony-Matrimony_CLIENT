import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="">
      <div className="">
        <div className="md:hidden">
          <h1 className="text-red-600 font-bold border-b-2 border-red-600 w-fit mx-auto p-2">
            About
          </h1>
          <div className="">
            <img src='https://i.ibb.co/swBsp3p/flower.png' alt="" className="lg:w-[15%] w-[60%] md:w-[40%] mx-auto -mt-2 mb-10" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">

          <div className="text-justify text-lg hidden md:flex flex-col justify-center">
            <h1 className="text-red-600 font-bold border-b-2 border-red-600 w-fit mx-auto p-2 text-3xl">
              About
            </h1>
            <div className="">
              <img src='https://i.ibb.co/swBsp3p/flower.png' alt="" className="w-[50%]  mx-auto -mt-2 mb-10" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 -mb-10 md:hidden">
            <div><img className="rounded md:w-full" src="https://i.ibb.co/yNXcGc3/Wedding-at-OMG-Villa-Bali.jpg" alt="" /></div>


            <div> <img className="rounded" src="https://i.ibb.co/h18P50G/01197-619-M-1-1024x683.jpg" alt="" /></div>
          </div>
          <div><img className="rounded w-full  hidden md:flex" src="https://i.ibb.co/yNXcGc3/Wedding-at-OMG-Villa-Bali.jpg" alt="" /></div>


          <div> <img className="rounded  hidden md:flex" src="https://i.ibb.co/h18P50G/01197-619-M-1-1024x683.jpg" alt="" /></div>
          <div className="text-justify text-sm flex flex-col justify-center ">
            <p >Welcome to Soulmate Matrimony, a distinguished platform dedicated to helping individuals embark on the profound journey of discovering their life partner – a journey founded on the bedrock of trust, compatibility, and love.

              In the intricate tapestry of life, finding that one special person who aligns with your values, beliefs, and dreams can be a transformative experience. Soulmate Matrimony is committed to facilitating these extraordinary connections that have the power to shape destinies and create enduring bonds. <Link to='/about' className="text-blue-500">Read more...</Link></p>
          </div>

        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;