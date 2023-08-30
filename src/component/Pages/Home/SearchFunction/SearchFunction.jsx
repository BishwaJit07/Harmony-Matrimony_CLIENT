// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import heart from '../../../../assets/home/newHomeBannerImg/heart.png'
import {  useNavigate } from 'react-router-dom';
const SearchFunction = () => {

    // const [searchData, setSearchData] = useState([]);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        navigate("/alluser", {
                state: data
            }
           )

    };

    // console.log(searchData)
    return (
        <div className=" bg-white md:w-[400px] md:h-[500px] z-20 rounded-xl mt-[100px] ">

        <div className="w-[90%] mx-auto">
          <div className="flex items-center justify-between">
            <p className="text-[24px] font-alice">Find Your Partner</p>
            <img className="scale-90" src={heart} alt="" />
          </div>
        </div>
        <hr />

        <div>
        <form onSubmit={handleSubmit(onSubmit)}  className="w-[90%] mx-auto space-y-4" action="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">I am looking for a</span>
            </label>
            <select {...register("gender", { required: true })}  className="select font-normal focus:outline-none rounded-full border-primary-300 select-bordered select-sm">
            <option  defaultValue>Pick one</option>
            <option value="Female">Woman</option>
                            <option value="Male">Man</option>
            </select>
          </div>
          {/* age */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <select {...register("age", { required: true })} className="select font-normal focus:outline-none rounded-full border-primary-300 select-bordered select-sm">
            <option  defaultValue>Pick one</option>
            <option value="20 to 23">20 to 23</option>
                            <option value="24 to 27">24 to 27</option>
                            <option value="28 to 31">28 to 31</option>
                            <option value="32 to 35">32 to 35</option>
                            <option value="36 to 40">36 to 40</option>
            </select>
          </div>
          {/* Religion */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Religion</span>
            </label>
            <select {...register("religion", { required: true })} className="select font-normal focus:outline-none select-bordered rounded-full border-primary-300 select-sm">
              <option  defaultValue>Pick one</option>
              <option value="Hindu">Hindu</option>
                            <option value="Muslim">Muslim</option>
                            <option value="Christian">Christian</option>
                            <option value="Buddhist">Buddhist</option>
                            <option value="Jewish">Jewish</option>
                            <option value="No Religion">No Religion</option>
                            <option value="Other">Other</option>
            </select>
          </div>
          {/* Living In */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Living In</span>
            </label>
            <select {...register("country", { required: true })}  className="select font-normal focus:outline-none select-bordered rounded-full border-primary-300 select-sm">
              <option className="font-normal"  defaultValue>Pick one</option>
              <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="MUSAan">USA</option>
                            <option value="United Kingdom">UK</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                        </select>
          </div>
          <div className="">
            <button className="bg-primary-500 text-white w-full py-2 rounded-full mt-4">Search</button>
          </div>
        </form>
        </div>
      </div>
    );
};

export default SearchFunction;