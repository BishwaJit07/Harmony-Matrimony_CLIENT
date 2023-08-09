import { Link } from "react-router-dom";
import image from "../../../../assets/hero_section_image.png";
const HeroSection = () => {
  return (
    <div>
      <div className="bg-[#FFFBF0] px-16 pt-20 pb-10 gap-8 flex justify-center items-center flex-col-reverse md:flex-row">
        {/* contain */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-[#D32C3D] font-bold text-lg pl-1">Find Your</h4>
          <h1 className="text-5xl text-[#000000] font-bold mt-3">Best Match</h1>
          <p className="text-base mt-5">
            Discover everlasting companionship and find your perfect match with
            our advanced matchmaking algorithm. Let us help you embark on a
            journey of love and happiness. Your happily ever after begins here
          </p>
          <Link to="/">
            <button className="mt-3">
              <p className=" bg-[#D32C3D] text-white p-3 text-base rounded-xl hover:bg-[#bc1828]">
                JOIN OUR PARTY
              </p>
            </button>
          </Link>
        </div>
        {/* image */}
        <div className="md:w-1/2">
          <img src={image} alt="Hero image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
