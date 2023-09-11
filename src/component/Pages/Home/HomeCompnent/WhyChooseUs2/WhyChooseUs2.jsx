import shield from '../../../../../assets/home/whyChooseUs/shiled.png'
import man from '../../../../../assets/home/whyChooseUs/man.png'

const WhyChooseUs2 = () => {
  return (
    <div className=' bg-opacity-30 mx-auto bg-primary-50 mt-[90px] dark:text-white dark:bg-gray-800' >
      <div className="w-[80%] mx-auto py-[75px]">
        <div className="text-center mb-10" >
          <p className="text-[45px] mb-3 font-alice">Why Choose Us</p>
          <p className="font-lato md:text-[18px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry s standard dummy text ever since the 1500s</p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" >
          <div className="hover:scale-[1.009] hover:shadow  rounded-lg border border-gray-200 bg-white duration-150 flex flex-col gap-2 items-center py-7 px-6  dark:bg-gray-500" data-aos="zoom-in" data-aos-duration="1000">
            <img className='w-[50px] mb-2' src={shield} alt="" />
            <p className='font-alice text-2xl text-center'>Assure the Honesty of Profile</p>
            <p className='text-center font-lato'>Explore active profiles by location, community, profession, and more from .</p>
          </div>
          <div className="hover:scale-[1.009] hover:shadow  rounded-lg border border-gray-200 bg-white duration-150 flex flex-col gap-2 items-center py-7 px-6 dark:bg-gray-500" data-aos="zoom-in" data-aos-duration="1000" >
            <img className='w-[50px] mb-2' src={man} alt="" />
            <p className='font-alice text-2xl'>On-Site Verification</p>
            <p className='text-center font-lato'>Exclusive compilation of profiles authenticated by our agents through in-person visits.</p>
          </div>
          <div className="hover:scale-[1.009] hover:shadow  rounded-lg border border-gray-200 bg-white duration-150 flex flex-col gap-2 items-center py-7 px-6 dark:bg-gray-500"  data-aos="zoom-in" data-aos-duration="1000">
            <img className='w-[50px] mb-2' src={shield} alt="" />
            <p className='font-alice text-2xl'>Managing Privacy</p>
            <p className='text-center font-lato'>Enhance security by limiting unauthorized access to contact information and photos/videos.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default WhyChooseUs2;