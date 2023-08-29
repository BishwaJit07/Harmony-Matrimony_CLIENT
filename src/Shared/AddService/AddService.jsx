import Heading from '../Heading';
import Swal from 'sweetalert2';
import imgService from "../../assets/admin/Banner (2).png"
const AddService = () => {

  const handleService = e => {
    e.preventDefault()
    const form = e.target

    const serviceName = form.serviceName.value
    const servicePrice = form.servicePrice.value
    const imgLink = form.imgLink.value
    const serviceCategory = form.serviceCategory.value
    const serviceDes = form.serviceDes.value
    // provider
    const providerName = form.providerName.value
    const providerEmail = form.providerEmail.value
    const providerLink = form.providerLink.value
    const data = {
      name: serviceName,
      description: serviceDes,
      price: servicePrice,
      provider: {
        name: providerName,
        contact: providerEmail,
        portfolio: providerLink
      },
      image: imgLink,
      category: serviceCategory
    }

    fetch('https://soulmates-server-two.vercel.app/service', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank you for sharing you story',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  return (
    <div className='h-[100vh] overflow-hidden w-full relative '>
     <div className='w-[90%] h-[200px] mx-auto relative flex  items-center'>
      <img src={imgService} alt="" className='w-full h-full absolute top-0 left-0 object-cover rounded-xl' />
    {/* Text */}
    <div className="text-center p-8 relative z-10  ">
      <p className='lg:text-[50px] text-3xl font-lato text-white text-left'>Add Services</p>
      <p className='text-sm lg:text-[16px] font-lato text-gray-200 leading-7 text-left mt-4'>End the struggle of finding a bride or groom. Discover your </p>
    </div>
  </div>

    </div >
  );
};

export default AddService;
        // {/* <div className="mb-6">
        //   <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Name</label>
        //   <input name='serviceName' type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Service Name" required />
        // </div>

        // {/* price */}
        // <div className="mb-6">
        //   <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Price</label>
        //   <input name='servicePrice' type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Service price" required />
        // </div>

        // {/* img link */}
        // <div className="mb-6">
        //   <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Link</label>
        //   <input name='imgLink' type="text" id="img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image Link" required />
        // </div>

        // {/* category */}
        // <div className="mb-6">
        //   <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a category</label>
        //   <select name='serviceCategory' required id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        //     <option selected>Choose a category</option>
        //     <option value="catering">Catering</option>
        //     <option value="hotel">Hotel</option>
        //     <option value="photography">Photography</option>
        //   </select>
        // </div>

        // {/* description */}
        // <div className="mb-6">
        //   <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Description</label>
        //   <textarea name='serviceDes' id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your service description here..." required></textarea>
        // </div>

        // {/* provider info */}
        // <h1 className='text-3xl font-bold mb-4'>Provider Info</h1>

        // {/* provider email */}
        // <div className="mb-6">
        //   <label htmlFor="providerEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provider Email</label>
        //   <input name='providerEmail' type="email" id="providerEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Provider Email" required />
        // </div>

        // {/* provider name */}
        // <div className="mb-6">
        //   <label htmlFor="providerName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provider Name</label>
        //   <input name='providerName' type="text" id="providerName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Provider Name" required />
        // </div>

        // {/* provider web */}
        // <div className="mb-6">
        //   <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website Link</label>
        //   <input name='providerLink' type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Website Link" required />
        // </div> */}