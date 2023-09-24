import  {  useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Header from '../../../Shared/Header/Header';



const AddBlog = () => {
  const Image_Hosting_Token = import.meta.env.VITE_Image_Upload_Token;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Token}`;
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm()
  const [startDate, setStartDate] = useState(new Date());

  const { user } = useContext(AuthContext);
  const onSubmit = (blogData) => {
    const formData = new FormData();
    formData.append('image', blogData.image[0])
    console.log(blogData)

    axios.post(image_hosting_url, formData)
      .then(res => {
        const finalData = { title: blogData.title, details: blogData.details, type: blogData.type, image: res.data.data.url, react: 0, date: startDate, email : user.email}
        console.log({res, finalData})
        if(res.data.success){
          axios.post('https://soulmates-server.vercel.app/blogs', finalData)
            .then(res => {
              console.log(res)
              if (res.data.insertedId){
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Blog Added',
                  showConfirmButton: false,
                  timer: 1500
                })
                navigate('/blog')
              }
              else{
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Failed to added blog',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
            .catch(err => console.log(err))
        }
      })
  }

  return (
    <div className=' max-w-7xl mx-auto'>
      <Header title="Add Blogs" />
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 px-10 bg-white my-10 py-10 w-[700px] mx-auto rounded-[30px]' action="">
        {/* input field */}
        <div>
          <label htmlFor="blog_title" className="text-[20px] font-lato  block mb-2 font-medium text-gray-900 ">Blog Tittle</label>
          <input {...register('title', {required: true})} type="text" id="blog_title" className="text-[18px] font-medium font-lato rounded-full py-5 pl-7 bg-gray-50 border border-gray-300 text-gray-900   focus:ring-blue-500 focus:border-blue-500 block w-full "placeholder="Type Blog title" />
        </div>

        {/* input field */}
        <div className="">
          <label htmlFor="description" className="text-[20px] font-lato  block mb-2 font-medium text-gray-900 ">Description</label>
          <textarea {...register('details', {required: true})} id="description" rows="4" className="rounded-[15px] block py-5 pl-7 w-full text-[18px] font-medium font-lato text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
        
        <div className="flex gap-8">
          {/* input field */}
          <div className='w-full'>
            <label htmlFor="blog_category" className="text-[20px] font-lato  block mb-2 font-medium text-gray-900 ">Blog Category</label>
            {/* <input type="text" id="first_name" className="text-[18px] font-medium font-lato rounded-full py-5 pl-7 bg-gray-50 border border-gray-300 text-gray-900   focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" /> */}
            <select defaultValue={'Advice'} {...register('type', {required: true})} id="blog_category" className="text-[18px] font-medium font-lato rounded-full py-5 pl-7 pr-7 bg-gray-50 border border-gray-300 text-gray-900   focus:ring-blue-500 focus:border-blue-500 block w-full ">
              <option selected>Choose a category</option>
              <option value="advice">Advice</option>
              <option value="engagement">Engagement</option>
              <option value="dates">Dates</option>
              <option value="wedding">Wedding</option>
              <option value="photography">Photography</option>
            </select>
          </div>
          {/* input field */}
          <div className='w-full'>
            <label htmlFor="first_name" className="text-[20px] font-lato  block mb-2 font-medium text-gray-900 ">Publish Date</label>
            {/* <input type="text" id="first_name" className="text-[18px] font-medium font-lato rounded-full py-5 pl-7 bg-gray-50 border border-gray-300 text-gray-900   focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" /> */}
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
        </div>

        {/* file Input */}
        <div className="">
          <label htmlFor="first_name" className="text-[20px] font-lato  block mb-2 font-medium text-gray-900 ">Add Blog images</label>
          <div className="flex items-center justify-center w-full">

            <label htmlFor="dropzone-file" className="py-10 flex flex-col items-center justify-center w-full border-4 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">

              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className='w-8 h-8 mb-4 text-gray-500 ' viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3.44336" width="29.4" height="26.4444" rx="3" fill="#E8EFFF" />
                  <path d="M4.37512 2.35051C4.3622 2.37204 4.233 2.40075 4.09088 2.42229C3.94875 2.44382 3.74849 2.47971 3.63867 2.50124C3.38672 2.55867 2.50815 3.04676 2.50815 3.12572C2.50815 3.16161 2.48231 3.17596 2.45001 3.14725C2.39187 3.11136 1.79108 3.64253 1.74586 3.76455C1.73294 3.80044 1.6425 3.92247 1.55205 4.03731C1.45515 4.15216 1.34533 4.28854 1.30011 4.35314C1.17737 4.52541 0.899583 5.16424 0.867283 5.34369C0.847902 5.437 0.789761 5.68105 0.73162 5.88921C0.641179 6.22657 0.634719 7.39657 0.647639 17.4456C0.667019 26.863 0.679939 28.6647 0.757461 28.8441C0.809142 28.959 0.854362 29.1025 0.867283 29.16C0.899583 29.3322 1.11277 29.7701 1.19029 29.8275C1.23551 29.8562 1.28719 29.9639 1.30657 30.0644C1.33241 30.1649 1.37763 30.2438 1.40993 30.2438C1.44869 30.2438 1.47453 30.2797 1.47453 30.3228C1.47453 30.4233 2.07532 31.0908 2.37895 31.3205C2.67611 31.5574 3.02496 31.7655 3.02496 31.7081C3.02496 31.6794 3.07018 31.7009 3.12186 31.7512C3.17354 31.8014 3.21876 31.8158 3.21876 31.7942C3.21876 31.7655 3.26398 31.7942 3.32212 31.8517C3.3738 31.9163 3.47071 31.9737 3.52885 31.9737C3.58699 31.9809 3.70973 32.0024 3.80017 32.0239C3.89061 32.0455 8.04446 32.0742 13.0317 32.0885L22.1017 32.1101L22.2696 32.3326C22.6378 32.8063 23.2839 33.4882 23.6004 33.7395C23.9105 33.9763 24.7826 34.4716 24.8214 34.4214C24.8407 34.3998 24.8601 34.4214 24.8601 34.4644C24.8601 34.5147 24.8795 34.5434 24.9118 34.5362C24.9376 34.5362 25.0022 34.5434 25.0539 34.5649C25.4286 34.7228 26.1198 34.9166 26.4429 34.9597C27.2439 35.0674 28.7879 34.9453 28.9623 34.7587C28.9946 34.7228 29.0915 34.6941 29.1755 34.6941C29.2595 34.6941 29.421 34.651 29.5308 34.5936C29.6471 34.5434 29.8602 34.4429 30.0153 34.3711C30.1639 34.2993 30.2866 34.2132 30.2866 34.1773C30.2866 34.1486 30.3125 34.1271 30.3383 34.1414C30.4675 34.1845 31.2427 33.5528 31.7272 33.0145C32.3926 32.268 32.6381 31.945 32.819 31.5358C32.903 31.3636 32.9999 31.1769 33.0451 31.1195C33.0903 31.0693 33.1097 30.9831 33.0903 30.9257C33.0645 30.8683 33.0838 30.818 33.1226 30.818C33.1614 30.818 33.1937 30.775 33.1937 30.7247C33.1937 30.6817 33.2324 30.5525 33.2841 30.452C33.3681 30.2725 33.4714 29.9136 33.4844 29.7773C33.4844 29.7342 33.5102 29.6624 33.536 29.6122C33.5683 29.5691 33.5748 29.526 33.5554 29.526C33.5425 29.526 33.5683 29.3538 33.62 29.1528C33.6782 28.8872 33.704 28.4565 33.6846 27.7316C33.6652 26.6979 33.6329 26.3965 33.5102 26.1381C33.4779 26.0663 33.4585 26.0089 33.4779 26.0089C33.5167 26.0089 33.3681 25.4562 33.2518 25.1547C33.2001 25.0327 33.1355 24.9322 33.1097 24.9322C33.0774 24.9322 33.0774 24.8963 33.0968 24.8604C33.1161 24.8245 33.1032 24.7886 33.058 24.7886C33.0128 24.7886 32.9934 24.7671 33.0192 24.7455C33.0709 24.6809 32.7415 23.999 32.6575 23.999C32.6187 23.999 32.6123 23.9775 32.6316 23.956C32.6575 23.9273 32.58 23.7765 32.4701 23.6114C32.2053 23.231 31.4042 22.3481 31.3267 22.3481C31.2944 22.3481 31.2556 22.2979 31.2298 22.2405C31.2104 22.183 31.1523 22.1328 31.1006 22.1328C31.0554 22.1328 30.9972 22.0825 30.9714 22.0251C30.952 21.9677 30.8939 21.9175 30.8357 21.9175C30.7776 21.9175 30.6678 21.8529 30.5902 21.7667C30.4481 21.616 30.1768 21.4652 29.9184 21.3791L29.7698 21.336L29.7504 13.6772C29.744 9.4638 29.7181 5.96817 29.6987 5.91074C29.6794 5.85332 29.6148 5.61645 29.5502 5.38676C29.4856 5.16424 29.408 4.97762 29.3757 4.97762C29.3434 4.97762 29.3241 4.95608 29.3305 4.92019C29.3499 4.82688 29.2013 4.51105 29.0657 4.34596C28.9881 4.25983 28.9429 4.18805 28.9688 4.18805C28.9946 4.18805 28.846 4.0086 28.6393 3.79326C28.4261 3.57793 28.2323 3.39848 28.2 3.39848C28.1742 3.39848 28.1677 3.36259 28.1871 3.3267C28.2065 3.28363 28.2 3.25492 28.1612 3.25492C28.1289 3.25492 28.0579 3.21185 28.0127 3.16161C27.9222 3.06112 27.3408 2.74529 27.2762 2.75965C27.2504 2.75965 27.2116 2.73093 27.1922 2.68787C27.1664 2.65198 27.0566 2.60173 26.9467 2.57302C26.8305 2.55149 26.656 2.49406 26.5591 2.44382C26.417 2.37922 23.988 2.35051 15.3896 2.33615C9.3494 2.32897 4.3945 2.33615 4.37512 2.35051ZM26.3072 3.60664C26.3459 3.67124 26.7852 3.79326 26.8821 3.77173C26.908 3.76455 26.9274 3.78609 26.9274 3.82198C26.9274 3.85786 26.9984 3.90811 27.0889 3.92964C27.1793 3.95835 27.2504 4.0086 27.2504 4.04449C27.2504 4.08756 27.2891 4.11627 27.3343 4.11627C27.3796 4.11627 27.5152 4.22394 27.638 4.34596C27.7542 4.47516 27.8318 4.53977 27.7995 4.48234C27.7672 4.41056 27.7736 4.39621 27.8253 4.4321C27.8641 4.46081 27.8835 4.51105 27.8641 4.54694C27.8447 4.58283 27.9158 4.67615 28.0256 4.76228C28.1289 4.84842 28.2194 4.95608 28.2194 4.99915C28.2194 5.0494 28.2904 5.23602 28.3744 5.41547C28.4519 5.60209 28.5424 5.82461 28.5747 5.91792C28.6005 6.01123 28.6393 6.14044 28.6587 6.19786C28.7168 6.37013 28.7491 14.6678 28.691 14.6678C28.6651 14.6678 27.9481 13.9141 27.1018 12.9882C25.8098 11.5885 25.532 11.3157 25.3899 11.3301C25.1444 11.3516 24.9958 11.4234 24.6986 11.6818C24.5565 11.8038 24.2852 12.0191 24.1043 12.1555C23.9169 12.2919 23.7619 12.4283 23.7619 12.457C23.7619 12.4929 23.7167 12.5144 23.665 12.5144C23.6133 12.5144 23.5681 12.5431 23.5681 12.579C23.5681 12.6149 23.51 12.6723 23.4389 12.6939C23.3678 12.7226 23.3291 12.7728 23.3485 12.8159C23.3743 12.8589 23.3614 12.8733 23.3291 12.8518C23.2709 12.8087 22.9867 12.9953 22.8575 13.1604C22.8381 13.182 22.6572 13.3255 22.457 13.4762C22.2502 13.6342 22.0823 13.7849 22.0823 13.8208C22.0823 13.8495 22.0371 13.8782 21.9854 13.8782C21.9402 13.8782 21.8691 13.9213 21.8433 13.9787C21.8174 14.0289 21.7076 14.1223 21.5978 14.1869C21.236 14.395 20.5319 15.0051 20.5835 15.0626C20.6094 15.0985 20.5965 15.0985 20.5577 15.0769C20.4931 15.0339 20.1895 15.2348 20.0796 15.3927C20.0603 15.4143 19.8729 15.565 19.6597 15.7301C19.4466 15.8952 19.1881 16.1105 19.0848 16.211C18.9814 16.3115 18.8781 16.3905 18.8522 16.3905C18.7489 16.3905 17.7605 17.2375 17.8057 17.2877C17.8315 17.3236 17.8121 17.3236 17.7734 17.2949C17.7217 17.2662 17.6248 17.3164 17.5279 17.4241L17.3664 17.6035L17.1597 17.3882C17.0434 17.2734 16.9271 17.1729 16.9013 17.1729C16.869 17.1657 16.8237 17.1585 16.7914 17.1513C16.7591 17.1513 16.6558 17.0508 16.5524 16.9432C16.4555 16.8355 16.2876 16.6991 16.1777 16.6417C16.0679 16.5843 15.9064 16.4623 15.816 16.3689C15.6803 16.2326 15.2152 15.8665 14.7888 15.565C14.7307 15.5219 14.6725 15.4789 14.6532 15.4502C14.6338 15.4286 14.4787 15.2994 14.2978 15.1631C14.1234 15.0339 13.9684 14.8975 13.9555 14.8616C13.9425 14.8329 13.8909 14.8113 13.8392 14.8113C13.7875 14.8113 13.6389 14.6965 13.4968 14.5601C13.3611 14.4237 13.1996 14.3089 13.1415 14.3089C13.0833 14.3089 13.0187 14.2658 12.9994 14.2084C12.9671 14.1151 12.4115 13.6557 11.9076 13.304C11.6298 13.1102 11.197 12.7656 11.0743 12.6364C11.0032 12.5718 10.9192 12.5144 10.8934 12.5144C10.8611 12.5144 10.7771 12.4498 10.6996 12.3709C10.622 12.2991 10.5445 12.2488 10.5187 12.2632C10.4993 12.2775 10.4024 12.1986 10.3055 12.0837C10.2086 11.9689 10.0729 11.854 10.0019 11.8325C9.93081 11.8038 9.87267 11.7536 9.87267 11.7177C9.87267 11.6746 9.84683 11.6602 9.81453 11.689C9.77577 11.7105 9.73055 11.6818 9.69825 11.6244C9.62073 11.4736 9.2848 11.2942 9.07808 11.2942C8.9618 11.2942 8.8326 11.3731 8.70985 11.5095C8.60649 11.6244 8.49021 11.7248 8.45145 11.7248C8.41915 11.7248 8.38685 11.7751 8.38685 11.8325C8.38685 11.8899 8.34163 11.9402 8.28995 11.9402C8.24473 11.9402 8.1672 11.9976 8.1349 12.0622C8.09614 12.134 8.06384 12.1627 8.06384 12.134C8.06384 12.0981 7.96694 12.1699 7.85712 12.2919C7.74084 12.4139 7.58579 12.579 7.51473 12.6508C7.44367 12.7226 7.31447 12.8231 7.23695 12.8733C7.15297 12.9164 7.10129 12.9738 7.12067 12.9953C7.14005 13.0169 7.03023 13.1245 6.86872 13.2394C6.71368 13.347 6.54572 13.505 6.5005 13.5911C6.45528 13.6701 6.38421 13.7347 6.33899 13.7347C6.29377 13.7347 6.22271 13.7993 6.17749 13.8782C6.13227 13.9572 6.06767 14.0218 6.02891 14.0218C5.99015 14.0218 5.83511 14.1653 5.68652 14.3448C5.53794 14.5242 5.38936 14.6678 5.3506 14.6678C5.3183 14.6678 5.15033 14.8185 4.98237 14.998C4.81441 15.1846 4.56246 15.4143 4.43326 15.5148C4.2976 15.6081 4.18778 15.7158 4.18778 15.7445C4.18778 15.7732 4.09088 15.8737 3.96813 15.967C3.84539 16.0603 3.76141 16.1608 3.77433 16.1895C3.79371 16.2182 3.76787 16.2469 3.72265 16.2469C3.67743 16.2469 3.49655 16.3977 3.32212 16.5699C3.1477 16.7494 2.97974 16.8929 2.94744 16.8929C2.91514 16.8929 2.90222 16.9216 2.9216 16.9575C2.94098 16.9862 2.88284 17.0508 2.79885 17.0939C2.62443 17.18 2.32081 17.4672 1.91382 17.9194L1.66188 18.1993L1.68772 12.2129C1.69418 8.92546 1.72648 6.16197 1.74586 6.08301C1.7717 5.99688 1.81692 5.86768 1.84922 5.7959C2.23683 4.94891 2.23683 4.95608 2.65027 4.46799C2.78593 4.31725 2.92806 4.18805 2.96682 4.18805C2.99912 4.18805 3.01204 4.15216 2.99266 4.11627C2.97328 4.0732 2.99912 4.04449 3.05726 4.04449C3.1154 4.04449 3.28336 3.97271 3.43195 3.88658C3.58053 3.80044 3.77433 3.71431 3.86477 3.69995C3.95521 3.68559 4.05212 3.64971 4.08442 3.60664C4.1684 3.5205 26.262 3.5205 26.3072 3.60664ZM14.5563 16.7494C18.6067 19.9076 19.9504 20.9125 20.0861 20.9125C20.4156 20.9125 20.6223 20.5321 20.4931 20.166C20.4673 20.1014 19.944 19.6564 19.3303 19.1755C18.7101 18.6946 18.2256 18.2783 18.2514 18.2496C18.2837 18.2208 19.8858 16.936 21.8174 15.3856L25.3317 12.5718L27.0307 14.4596L28.7362 16.3546V18.6802V20.9987L28.5618 20.9484C28.1225 20.8264 27.2827 20.7833 26.7013 20.8479C24.2916 21.1207 22.2696 22.8147 21.3846 25.2982C20.7903 26.9492 20.7967 28.8872 21.3975 30.5309L21.559 30.9616L12.728 30.9473L3.89707 30.9257L3.39318 30.6601C2.72779 30.3012 2.26267 29.7844 1.93966 29.0451L1.70064 28.4852L1.68772 24.0349L1.66834 19.5846L5.40228 16.089C7.45013 14.1581 9.14914 12.5862 9.16852 12.5862C9.19436 12.5862 11.6169 14.4596 14.5563 16.7494ZM28.3809 22.0036C30.3318 22.3697 32.0631 24.2216 32.5476 26.4611C32.7221 27.2722 32.7221 28.4852 32.5476 29.3107C32.0954 31.4282 30.5902 33.115 28.6328 33.6964C27.9028 33.9189 26.7142 33.9189 25.9583 33.6964C25.3123 33.5098 24.5177 33.0791 24.0397 32.6699C20.8549 29.9423 21.3135 24.5087 24.8924 22.506C25.9454 21.9175 27.0759 21.7524 28.3809 22.0036Z" fill="#154096" />
                  <path d="M16.5076 6.45611C16.4882 6.47765 16.4042 6.50636 16.3202 6.52071C15.9456 6.57096 15.7194 6.64274 15.7001 6.70734C15.6871 6.74323 15.6225 6.77194 15.5579 6.77194C15.4933 6.77194 15.4158 6.80783 15.3964 6.84372C15.3706 6.88679 15.2608 6.95857 15.151 7.01599C14.9184 7.12366 14.3305 7.71224 14.3305 7.83427C14.3305 7.88451 14.2982 7.91323 14.2659 7.89887C14.2272 7.89169 14.1626 7.95629 14.1173 8.03525C13.8654 8.52335 13.6845 8.95402 13.6587 9.12629C13.6458 9.23396 13.6264 9.32009 13.6199 9.32009C13.5359 9.32009 13.5036 10.6049 13.5812 10.971C13.6651 11.3514 13.8783 12.0405 13.93 12.0764C13.9558 12.1051 14.0527 12.2487 14.1367 12.4066C14.2272 12.5645 14.3628 12.7798 14.4468 12.8803C14.6018 13.0813 15.1703 13.5551 15.1703 13.4905C15.1703 13.4689 15.2802 13.5335 15.4094 13.634C15.5386 13.7273 15.6871 13.7919 15.7324 13.7776C15.7776 13.756 15.8163 13.7704 15.8163 13.8135C15.8163 13.8565 15.8616 13.8781 15.9132 13.8493C15.9649 13.8278 16.0102 13.8422 16.0102 13.8852C16.0102 13.9283 16.0425 13.9355 16.0748 13.9139C16.1135 13.8852 16.1846 13.9068 16.2363 13.9498C16.4107 14.1078 17.5993 14.0144 18.0451 13.8063C18.1161 13.7704 18.2841 13.7058 18.4198 13.6555C18.549 13.6053 18.6588 13.5335 18.6588 13.5048C18.6588 13.4761 18.6976 13.4474 18.7492 13.4474C18.8009 13.4474 18.8526 13.3971 18.8784 13.3397C18.8978 13.2823 18.9366 13.2392 18.9624 13.2464C19.0399 13.2751 19.6924 12.5789 19.6924 12.4712C19.6924 12.4138 19.7247 12.3707 19.7699 12.3707C19.8087 12.3707 19.8281 12.3492 19.8087 12.3276C19.7829 12.3061 19.841 12.1697 19.925 12.0333C20.009 11.897 20.0606 11.7534 20.0413 11.7175C20.0219 11.6816 20.0413 11.6529 20.08 11.6529C20.1188 11.6529 20.1317 11.617 20.1123 11.5811C20.0929 11.5381 20.1059 11.5094 20.1446 11.5094C20.1898 11.5094 20.2092 11.4591 20.1898 11.4017C20.164 11.3443 20.1834 11.2797 20.2157 11.2509C20.2544 11.2294 20.2738 11.1433 20.2544 11.0715C20.2351 10.9925 20.2415 10.9351 20.2674 10.9351C20.3578 10.9351 20.3255 9.68617 20.2286 9.22678C20.1705 8.98273 20.1059 8.78175 20.08 8.78175C20.0542 8.78175 20.009 8.69562 19.9831 8.58795C19.9637 8.48028 19.8927 8.35108 19.8345 8.29365C19.7635 8.22905 19.757 8.2147 19.8216 8.25059C19.9056 8.30083 19.9056 8.29365 19.8216 8.16445C19.7699 8.09267 19.673 7.97783 19.6149 7.91323C19.5503 7.84862 19.4986 7.76249 19.4986 7.71942C19.4986 7.57586 18.4779 6.75041 18.3552 6.80065C18.3099 6.82219 18.2712 6.81501 18.2712 6.7863C18.2712 6.72169 17.9611 6.59249 17.6575 6.51354C17.3926 6.45611 16.5528 6.41305 16.5076 6.45611ZM17.5477 7.662C18.2195 7.86298 18.7622 8.35826 19.0916 9.06887C19.2531 9.42776 19.2725 9.53543 19.2725 10.2173C19.2725 10.8849 19.2531 11.0213 19.0981 11.3802C18.8784 11.9041 18.4327 12.3994 17.9611 12.6435C17.6381 12.8157 17.5154 12.8373 16.9146 12.8373C16.3073 12.8373 16.1975 12.8157 15.8745 12.6363C15.1703 12.2559 14.6277 11.3945 14.5502 10.5332C14.3757 8.6669 15.9262 7.18108 17.5477 7.662Z" fill="#154096" />
                  <path d="M25.8805 25.7075C24.8275 26.8774 24.666 27.0856 24.666 27.2794C24.666 27.5881 24.8469 27.8106 25.1053 27.8178C25.2991 27.8249 25.4025 27.7316 26.0549 27.0138L26.7914 26.1955L26.8108 28.6576L26.8302 31.1196L26.9852 31.256C27.1855 31.4354 27.4697 31.4282 27.6377 31.2344C27.7604 31.0837 27.7669 30.9976 27.7669 28.6504C27.7669 27.3153 27.7862 26.2243 27.8121 26.2243C27.8379 26.2243 28.1997 26.5975 28.6196 27.0569C29.3108 27.8178 29.3948 27.8895 29.5563 27.8465C29.7889 27.7819 29.9633 27.5522 29.9633 27.3081C29.9633 27.1574 29.7114 26.8344 28.7165 25.7362C27.6635 24.5662 27.4439 24.358 27.2824 24.358C27.1209 24.358 26.9077 24.5662 25.8805 25.7075Z" fill="#154096" />
                  <path d="M16.8038 7.61191C16.9007 7.62627 17.0429 7.62627 17.1268 7.61191C17.2044 7.59756 17.1268 7.5832 16.946 7.5832C16.7715 7.5832 16.7005 7.59756 16.8038 7.61191Z" fill="#156BC1" />
                  <path d="M18.4004 8.15739C18.4004 8.17174 18.4973 8.27223 18.6136 8.39426L18.8203 8.60242L18.633 8.36555C18.4521 8.15021 18.4004 8.09996 18.4004 8.15739Z" fill="#156BC1" />
                  <path d="M14.543 10.2534C14.543 10.4472 14.5559 10.5261 14.5688 10.4113C14.5817 10.3036 14.5817 10.1457 14.5688 10.0524C14.5559 9.96626 14.543 10.0524 14.543 10.2534Z" fill="#156BC1" />
                  <path d="M15.235 12.1195C15.3578 12.2559 15.4676 12.3707 15.487 12.3707C15.5064 12.3707 15.4224 12.2559 15.2996 12.1195C15.1769 11.9831 15.0671 11.8683 15.0477 11.8683C15.0283 11.8683 15.1123 11.9831 15.235 12.1195Z" fill="#156BC1" />
                  <path d="M26.9925 14.4882C27.9357 15.5362 28.7173 16.3904 28.7367 16.3904C28.7561 16.3904 28.0003 15.5362 27.0571 14.4882C26.1139 13.4403 25.3322 12.5861 25.3129 12.5861C25.2935 12.5861 26.0493 13.4403 26.9925 14.4882Z" fill="#156BC1" />
                  <path d="M27.6569 20.8193C27.715 20.8337 27.8184 20.8337 27.883 20.8193C27.9411 20.7978 27.8894 20.7834 27.7667 20.7834C27.644 20.7834 27.5923 20.7978 27.6569 20.8193Z" fill="#156BC1" />
                  <path d="M22.7287 22.8866C22.5736 23.066 22.4573 23.2096 22.4767 23.2096C22.4961 23.2096 22.6382 23.066 22.7933 22.8866C22.9483 22.7071 23.0646 22.5636 23.0452 22.5636C23.0258 22.5636 22.8837 22.7071 22.7287 22.8866Z" fill="#156BC1" />
                  <path d="M23.4377 23.6761C23.2826 23.8556 23.1663 23.9991 23.1857 23.9991C23.2051 23.9991 23.3472 23.8556 23.5023 23.6761C23.6573 23.4967 23.7736 23.3531 23.7542 23.3531C23.7348 23.3531 23.5927 23.4967 23.4377 23.6761Z" fill="#156BC1" />
                  <path d="M25.8278 25.7002L24.6973 26.9779L25.8472 25.7218C26.9066 24.559 27.0229 24.4298 26.9712 24.4298C26.9648 24.4298 26.448 25.004 25.8278 25.7002Z" fill="#156BC1" />
                  <path d="M26.0563 27.0281L25.3457 27.8392L26.0757 27.0497C26.7475 26.3175 26.8315 26.2242 26.7798 26.2242C26.7734 26.2242 26.4439 26.5903 26.0563 27.0281Z" fill="#156BC1" />
                  <path d="M27.793 28.6647C27.793 29.9854 27.8059 30.531 27.8123 29.8634C27.8253 29.2031 27.8253 28.1264 27.8123 27.4588C27.8059 26.7985 27.793 27.344 27.793 28.6647Z" fill="#156BC1" />
                  <path d="M21.9082 27.8752C21.9082 28.1695 21.9211 28.2915 21.934 28.1408C21.947 27.9972 21.947 27.7532 21.934 27.6024C21.9211 27.4589 21.9082 27.5809 21.9082 27.8752Z" fill="#156BC1" />
                  <path d="M23.4698 32.11C23.6442 32.3038 23.7992 32.4689 23.8186 32.4689C23.838 32.4689 23.7088 32.3038 23.5344 32.11C23.3599 31.909 23.2049 31.7511 23.1855 31.7511C23.1661 31.7511 23.2953 31.909 23.4698 32.11Z" fill="#156BC1" />
                  <path d="M27.1398 33.8829C27.2367 33.8973 27.3788 33.8973 27.4628 33.8829C27.5403 33.8686 27.4628 33.8542 27.2819 33.8542C27.1075 33.8542 27.0364 33.8686 27.1398 33.8829Z" fill="#156BC1" />
                  <path d="M18.5618 8.42297C18.6975 8.58088 18.8267 8.71008 18.8461 8.71008C18.8655 8.71008 18.7621 8.58088 18.6264 8.42297C18.4908 8.26505 18.3616 8.13585 18.3422 8.13585C18.3228 8.13585 18.4262 8.26505 18.5618 8.42297Z" fill="#4096EC" />
                  <path d="M19.2598 10.2534C19.2598 10.4472 19.2727 10.5261 19.2856 10.4113C19.2985 10.3036 19.2985 10.1457 19.2856 10.0524C19.2727 9.96626 19.2598 10.0524 19.2598 10.2534Z" fill="#4096EC" />
                  <path d="M18.5545 12.0981L18.3672 12.335L18.5804 12.1268C18.6902 12.0048 18.7871 11.9043 18.7871 11.8899C18.7871 11.8325 18.7354 11.8828 18.5545 12.0981Z" fill="#4096EC" />
                  <path d="M25.2087 12.7443C25.1764 12.7945 25.1893 12.8017 25.2475 12.7658C25.2992 12.7299 25.8676 13.3113 26.9982 14.5675L28.6713 16.4265L28.6842 18.6876L28.7036 20.9486L28.7165 18.6876L28.7359 16.4265L27.0434 14.5459C26.1067 13.5051 25.325 12.6581 25.2992 12.6581C25.2733 12.6581 25.2346 12.694 25.2087 12.7443Z" fill="#4096EC" />
                  <path d="M16.7399 12.8518C16.8368 12.8661 16.9918 12.8661 17.0952 12.8518C17.1921 12.8374 17.1081 12.8231 16.9143 12.8231C16.7205 12.8231 16.6365 12.8374 16.7399 12.8518Z" fill="#4096EC" />
                  <path d="M22.6893 22.8651L22.502 23.1019L22.7151 22.8938C22.9089 22.6928 22.9542 22.6354 22.9025 22.6354C22.8896 22.6354 22.7991 22.743 22.6893 22.8651Z" fill="#4096EC" />
                  <path d="M23.4716 23.7264L23.084 24.1786L23.491 23.7479C23.8657 23.3531 23.9238 23.2814 23.8721 23.2814C23.8657 23.2814 23.6848 23.4823 23.4716 23.7264Z" fill="#4096EC" />
                  <path d="M31.0612 23.6761C31.184 23.8125 31.2938 23.9274 31.3132 23.9274C31.3325 23.9274 31.2486 23.8125 31.1258 23.6761C31.0031 23.5398 30.8933 23.4249 30.8739 23.4249C30.8545 23.4249 30.9385 23.5398 31.0612 23.6761Z" fill="#4096EC" />
                  <path d="M28.7356 25.6859C29.3945 26.418 29.9436 27.0138 29.963 27.0138C29.9824 27.0138 29.4591 26.418 28.8002 25.6859C28.1413 24.9537 27.5922 24.358 27.5728 24.358C27.5534 24.358 28.0767 24.9537 28.7356 25.6859Z" fill="#4096EC" />
                  <path d="M25.7974 25.6644L24.6992 26.9061L25.8168 25.6859C26.8504 24.5518 26.9603 24.4298 26.9086 24.4298C26.9021 24.4298 26.3982 24.9896 25.7974 25.6644Z" fill="#4096EC" />
                  <path d="M26.0885 27.0639L25.4102 27.8392L26.0691 27.1214L26.7345 26.4108L26.7539 28.7364L26.7668 31.0692L26.7862 28.679C26.7926 27.3726 26.7926 26.2959 26.7797 26.2959C26.7732 26.2959 26.4567 26.6405 26.0885 27.0639Z" fill="#4096EC" />
                  <path d="M28.5107 27.0856C28.8983 27.5162 29.2343 27.8751 29.2537 27.8751C29.2666 27.8751 28.9629 27.5162 28.5753 27.0856C28.1877 26.6477 27.8518 26.296 27.8324 26.296C27.8195 26.296 28.1231 26.6477 28.5107 27.0856Z" fill="#4096EC" />
                  <path d="M20.8828 27.911C20.8828 28.2627 20.8893 28.4206 20.9022 28.2555C20.9151 28.0904 20.9151 27.7962 20.9022 27.6095C20.8893 27.4229 20.8828 27.5521 20.8828 27.911Z" fill="#4096EC" />
                  <path d="M32.6328 27.8751C32.6328 28.2125 32.6457 28.3488 32.6587 28.1766C32.6716 28.0115 32.6716 27.7387 32.6587 27.5665C32.6457 27.4014 32.6328 27.5377 32.6328 27.8751Z" fill="#4096EC" />
                  <path d="M1.68164 27.8034C1.68164 27.9398 1.69456 27.9972 1.71394 27.9255C1.72686 27.8609 1.72686 27.746 1.71394 27.6742C1.69456 27.6096 1.68164 27.6671 1.68164 27.8034Z" fill="#4096EC" />
                  <path d="M2.37891 29.7629C2.37891 29.7772 2.47581 29.8777 2.59209 29.9997L2.79881 30.2079L2.61147 29.971C2.43059 29.7557 2.37891 29.7054 2.37891 29.7629Z" fill="#4096EC" />
                  <path d="M31.0627 32.0742C30.9076 32.2537 30.7913 32.3972 30.8107 32.3972C30.8301 32.3972 30.9722 32.2537 31.1273 32.0742C31.2823 31.8948 31.3986 31.7512 31.3792 31.7512C31.3598 31.7512 31.2177 31.8948 31.0627 32.0742Z" fill="#4096EC" />
                  <path d="M16.2505 7.76991C14.7259 8.32979 14.1316 10.2176 15.0231 11.7034C15.2815 12.1341 15.837 12.5863 16.2957 12.7298C16.7285 12.8662 17.5167 12.7944 17.9172 12.5791C18.3306 12.3638 18.8475 11.7895 19.0477 11.3301C19.2738 10.799 19.3061 9.89457 19.1123 9.33469C18.6924 8.08574 17.3616 7.36077 16.2505 7.76991Z" fill="#6B96EC" />
                  <path d="M5.41739 16.1895L1.66406 19.721L1.68344 23.9559C1.70928 28.1048 1.70928 28.2053 1.85141 28.6216C2.20025 29.6696 2.82688 30.3658 3.77652 30.7606L4.15766 30.9257L12.8207 30.9472L21.4901 30.9688L21.3351 30.5309C21.0056 29.6265 20.9023 29.0523 20.8958 27.9827C20.8893 26.6046 21.0702 25.7432 21.6064 24.5732C22.4914 22.6496 24.1711 21.2786 26.1673 20.8407C26.613 20.7402 27.9373 20.7331 28.3701 20.8264L28.6738 20.891V18.6587V16.4263L27.0006 14.5673C25.8055 13.2393 25.3016 12.7297 25.2435 12.7728C25.1336 12.8446 18.4539 18.1849 18.3828 18.2495C18.357 18.2782 18.7963 18.6515 19.3518 19.0893C19.9139 19.52 20.4178 19.9291 20.4824 19.9937C20.6568 20.1875 20.6374 20.6326 20.4436 20.8336C20.1012 21.1925 20.1852 21.2499 14.8814 17.1154C12.1811 15.0051 9.79088 13.1389 9.57123 12.9666L9.17717 12.6579L5.41739 16.1895Z" fill="#6B96EC" />
                  <path d="M26.6177 21.9964C25.5776 22.1328 24.4859 22.7142 23.6848 23.554C22.9096 24.3651 22.4638 25.1691 22.1796 26.2673C21.3462 29.4543 23.0582 32.7489 25.9911 33.6246C26.7146 33.84 27.9162 33.84 28.6268 33.6246C30.4485 33.0863 31.8504 31.5718 32.4318 29.5261C32.561 29.0595 32.5804 28.8442 32.5804 27.8751C32.5804 26.9061 32.561 26.6908 32.4318 26.2242C31.9731 24.602 31.0041 23.3243 29.6733 22.5922C28.7043 22.061 27.6449 21.8529 26.6177 21.9964ZM28.7818 25.6715C29.8736 26.8774 30.0286 27.0856 30.0286 27.2794C30.0286 27.4014 30.0093 27.5593 29.9899 27.6239C29.9253 27.7962 29.5893 27.9684 29.3891 27.911C29.2986 27.8895 28.9175 27.5306 28.5299 27.0999L27.8322 26.3319V28.7365C27.8322 31.098 27.8322 31.1339 27.6901 31.299C27.5996 31.4067 27.4769 31.4641 27.3412 31.4641C26.7469 31.4641 26.734 31.4138 26.734 28.6862V26.4037L26.1009 27.1071C25.4161 27.8608 25.2029 27.99 24.8799 27.8392C24.6603 27.7316 24.6021 27.6167 24.6021 27.2435C24.6021 27.0066 24.6861 26.8918 25.8166 25.6356C26.9795 24.3436 27.0441 24.2862 27.2831 24.2862C27.5286 24.2862 27.5867 24.3436 28.7818 25.6715Z" fill="#C5D1E9" />
                </svg>
                <p className="mb-2 text-[18px] text-gray-500  font-medium font-alice">Drag and Drop an image or <span className='text-blue-500 font-bold'>Browse</span></p>
                <p className="text-[14px] text-gray-500  font-lato">File must be JPG or PNG and Up to 25MB</p>
              </div>
              <input {...register('image', {required: true})} id="dropzone-file" type="file" className="hidden" />
            </label>
          </div> 
        </div>

        <button className='text-[20px] font-bold w-[50%] mx-auto bg-blue-500 rounded-full text-white py-[13px]  flex justify-center items-center '>Done</button>

      </form>
    </div>
  );
};

export default AddBlog;