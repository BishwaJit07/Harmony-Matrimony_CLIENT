import { useForm } from 'react-hook-form';
import { BsSearchHeartFill } from "react-icons/bs";
const SearchFunction = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='text-center my-20'>
            <h2 className='text-3xl font-semibold '>Find your <br /><span className='red-text'>Right Match</span> here</h2>
            <div className='secondary p-10 rounded-xl my-10  border-2 border-[#cf2532] border-opacity-50'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-16'>
                    <div className='flex flex-col'>
                        <h4 className='text-base font-medium mb-2 text-left'>I am looking for a </h4>
                        <select {...register("gender", { required: true })} className='text-lg border-2 border-red-800 border-opacity-50 px-2 rounded-md w-52'>
                            <option value="Woman">Woman</option>
                            <option value="Man">Man</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-base font-medium mb-2 text-left'>age</h4>
                        <select {...register("age", { required: true })} className='text-lg border-2 border-red-800 border-opacity-50 px-2 rounded-md w-52'>
                            <option value="20 to 23">20 to 23</option>
                            <option value="24 to 27">24 to 27</option>
                            <option value="28 to 31">28 to 31</option>
                            <option value="32 to 35">32 to 35</option>
                            <option value="36 to 40">36 to 40</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-base font-medium mb-2 text-left'>religion</h4>
                        <select {...register("religion", { required: true })} className='text-lg border-2 border-red-800 px-2 border-opacity-50 rounded-md w-52'>
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
                        <h4 className='text-base font-medium mb-2 text-left'>living in</h4>
                        <select {...register("country", { required: true })} className='text-lg border-2 border-red-800 px-2 border-opacity-50 rounded-md w-52'>
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
                    
                    
                         <button className='text-[#cf2532] mt-6 text-3xl' type="submit"><BsSearchHeartFill></BsSearchHeartFill></button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SearchFunction;