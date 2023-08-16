// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsSearchHeartFill } from "react-icons/bs";

const onSubmit = data => console.log(data);

const Search = () => {
    const { register, handleSubmit } = useForm();
    return (
        <div>
             <div className='p-5 rounded-xl my-10   border-opacity-50 '>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid md:grid-cols-2 2xl:grid-cols-5  gap-3 w-[100%] mx-auto '>
                    <div className='flex flex-col'>
                        <h4 className='text-base font-medium mb-2 text-left'>What are Your looking for</h4>
                        <select {...register("gender", { required: true })} className='text-lg border-2 border-[#4B5958] border-opacity-50 px-2 rounded-md w-44 md:w-52 text-left'>
                            <option value="Woman">Woman</option>
                            <option value="Man">Man</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-base font-medium mb-2 text-left '>Select The age</h4>
                        <select {...register("age", { required: true })} className='text-lg border-2 border-[#4B5958] border-opacity-50 px-2 rounded-md w-44 md:w-52 text-left'>
                            <option value="20 to 23">20 to 23</option>
                            <option value="24 to 27">24 to 27</option>
                            <option value="28 to 31">28 to 31</option>
                            <option value="32 to 35">32 to 35</option>
                            <option value="36 to 40">36 to 40</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-base font-medium mb-2 text-left mx-auto'>religion</h4>
                        <select {...register("religion", { required: true })} className='text-lg border-2 border-red-800 px-2 border-opacity-50 rounded-md w-44 md:w-52 mx-auto text-center'>
                            <option value="Woman">Hindu</option>
                            <option value="Muslim">Muslim</option>
                            <option value="Christian">Christian</option>
                            <option value="Buddhist">Buddhist</option>
                            <option value="Jewish">Jewish</option>
                            <option value="No Religion">No Religion</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-base font-medium mb-2 text-left mx-auto'>living in</h4>
                        <select {...register("country", { required: true })} className='text-lg border-2 border-red-800 px-2 border-opacity-50 rounded-md w-44 md:w-52 mx-auto text-center'>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="MUSAan">USA</option>
                            <option value="UK">UK</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                        </select>
                    </div>
                    
                    
                    <button className='hidden h-10 my-auto w-36 mx-auto  2xl:flex  gap-2 justify-center items-center bg-[#FF725E] text-white rounded' type="submit">
                        <h2 className='text-lg '>Search </h2>
                        <p className='text-2xl ' ><BsSearchHeartFill></BsSearchHeartFill></p>
                    </button>
                    </div>
                    
                    <button className=' 2xl:hidden flex mt-10 h-10 my-auto w-36 mx-auto  gap-2 justify-center items-center bg-[#FF725E] text-white rounded' type="submit">
                        <h2 className='text-lg '>Search </h2>
                        <p className='text-2xl ' ><BsSearchHeartFill></BsSearchHeartFill></p>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Search;