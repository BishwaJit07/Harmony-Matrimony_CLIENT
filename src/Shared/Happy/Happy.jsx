import logo from '../../assets/logo/logo.png'
import couple from '../../assets/Happy-form/couple.jpg'
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Happy = () => {

  const handleHappyStory = e => {
    e.preventDefault()
    const form = e.target
    const husband = form.husband.value
    const wife = form.wife.value
    const img = form.image.value
    const about_marriage = form.story.value
    const name = husband + "& " + wife
    const data = {  img, name, about_marriage }
    console.log(data)

    fetch('https://harmony-matrimony-server.vercel.app/allCouple', {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank you for sharing you story',
            showConfirmButton: false,
            timer: 1500
          })
          .then(() => {
            // Navigate to the root route after showing the success message
            window.location.href = '/';
          });
        }
        
        else{
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })

  }
  
  return (
    

    <div className="relative overflow-hidden">

      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Happy Story</title>
      </Helmet>
      
      {/* img */}
      <div className="relative">
        <img className="w-full h-[100vh] object-cover" src={couple} alt="" />
        <div className="w-full absolute inset-0 h-[100vh] bg-gradient-to-r from-black ">
        </div>
      </div>
      {/* form */}
      <div className="absolute center-div lg:w-1/2 px-4">
        <div className="">
          <div className='text-center mb-5'>
            <img className='w-52 mx-auto mt-10' src={logo} alt="" />
          </div>
          <p className='text-center text-[#a2a2a2] text-xl'>Share Your Happy Story</p>
        </div>

        {/* collect data */}
        <form onSubmit={handleHappyStory} className="">
          <div className="mb-6">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium  text-[#a2a2a2] dark:text-white">Husband</label>
            <input name="husband" type="text" id="default-input" className="bg-opacity-0 bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className="mb-6">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium  text-[#a2a2a2] dark:text-white">Wife</label>
            <input name="wife" type="text" id="default-input" className="bg-opacity-0 bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className="mb-6">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium  text-[#a2a2a2] dark:text-white">Image Link</label>
            <input name="image" type="text" id="default-input" className="bg-opacity-0 bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#a2a2a2] dark:text-white">Your Story</label>
            <textarea name="story" id="message" rows="4" className="bg-opacity-0 block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
          </div>

          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-opacity-0 hover:bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white  focus:outline-none  ring-pink-800 border border-white hover:border-none">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Send
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Happy;