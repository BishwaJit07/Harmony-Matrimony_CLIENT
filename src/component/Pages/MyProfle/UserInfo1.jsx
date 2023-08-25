import { useLocation } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { City, Country, State } from "country-state-city";
import { useEffect, useState, Fragment } from 'react';
import { BiFemale, BiMale } from 'react-icons/bi';
import { calculateAge } from '../../../utilities/utilities';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import Selector from './Selector';
import useMyData from '../../../Hooks/useMydata';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2';
import { Listbox, Transition } from '@headlessui/react';


const heightOptions = [
    { id: 1, name: '4 feet 8 inches' },
    { id: 2, name: '4 feet 9 inches' },
    { id: 3, name: '4 feet 10 inches' },
    { id: 4, name: '4 feet 11 inches' },
    { id: 5, name: '5 feet 0 inches' },
    { id: 6, name: '5 feet 1 inch' },
    { id: 7, name: '5 feet 2 inches' },
    { id: 8, name: '5 feet 3 inches' },
    { id: 9, name: '5 feet 4 inches' },
    { id: 10, name: '5 feet 5 inches' },
    { id: 11, name: '5 feet 6 inches' },
    { id: 12, name: '5 feet 7 inches' },
    { id: 13, name: '5 feet 8 inches' },
    { id: 14, name: '5 feet 9 inches' },
    { id: 15, name: '5 feet 10 inches' },
    { id: 16, name: '5 feet 11 inches' },
    { id: 17, name: '6 feet 0 inches' },
    { id: 18, name: '6 feet 1 inch' },
    { id: 19, name: '6 feet 2 inches' },
    { id: 20, name: '6 feet 3 inches' },
];

const weightOptions = [
    { id: 1, name: 'Below 40 kg' },
    { id: 2, name: '40 - 43 kg' },
    { id: 3, name: '43 - 46 kg' },
    { id: 4, name: '46 - 49 kg' },
    { id: 5, name: '49 - 52 kg' },
    { id: 6, name: '52 - 55 kg' },
    { id: 7, name: '55 - 58 kg' },
    { id: 8, name: '58 - 61 kg' },
    { id: 9, name: '61 - 64 kg' },
    { id: 10, name: '64 - 67 kg' },
    { id: 11, name: '67 - 70 kg' },
    { id: 12, name: '70 - 73 kg' },
    { id: 13, name: '73 - 76 kg' },
    { id: 14, name: '76 - 79 kg' },
    { id: 15, name: '79 - 82 kg' },
    { id: 16, name: '82 - 85 kg' },
    { id: 17, name: '85 - 88 kg' },
    { id: 18, name: '88 - 91 kg' },
    { id: 19, name: '91 - 94 kg' },
    { id: 20, name: '94 - 97 kg' },
    { id: 21, name: '97 - 100 kg' },
    { id: 22, name: '100 - 103 kg' },
    { id: 23, name: '103 - 106 kg' },
    { id: 24, name: '106 - 109 kg' },
    { id: 25, name: '109 - 112 kg' },
    { id: 26, name: '112 - 115 kg' },
    { id: 27, name: '115 - 118 kg' },
    { id: 28, name: '118 - 121 kg' },
    { id: 29, name: '121 - 124 kg' },
    { id: 30, name: '124 - 127 kg' },
    { id: 31, name: '127 - 130 kg' },
    { id: 32, name: '130 - 133 kg' },
    { id: 33, name: '133 - 136 kg' },
    { id: 34, name: '136 - 139 kg' },
    { id: 35, name: '139 - 142 kg' },
    { id: 36, name: '142 - 145 kg' },
    { id: 37, name: '145 - 148 kg' },
    { id: 38, name: '148 - 151 kg' },
    { id: 39, name: '151 - 154 kg' },
    { id: 40, name: 'Above 154 kg' },
];


const UserInfo1 = () => {
    const location = useLocation();
    const profileFor = location.state;
    const [userInfo] = useMyData();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const [selectedOption, setSelectedOption] = useState({});
    const [maritalStatus, setMaritalStatus] = useState({});
    const [religion, setReligion] = useState({});
    const [height, setheight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('US');
    const [error, setError] = useState("");

    let countryData = Country.getAllCountries();
    const [stateData, setStateData] = useState();
    const [cityData, setCityData] = useState();

    const [country, setCountry] = useState("Country");
    const [state, setState] = useState();
    const [city, setCity] = useState();

    console.log(userInfo);
    
    useEffect(() => {
        setStateData(State.getStatesOfCountry(country?.isoCode));
    }, [country]);

    useEffect(() => {
        setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
    }, [state]);

    useEffect(() => {
        stateData && setState(stateData[0]);
    }, [stateData]);

    useEffect(() => {
        cityData && setCity(cityData[0]);
    }, [cityData]);

    const onSubmit = (data) => {
        setError("")
        const birthdate = new Date(data.birth);
        const age = calculateAge(birthdate);
        if (age < 18) {
            setError("You must be 18 years old");
            return;
        }
        data = { mobile: phoneNumber, age: age, gender: selectedOption.Gender, maritalStatus: maritalStatus.maritalStatus, religion: religion.Religion, country: country?.name, state: state?.name, city: city?.name, height: height?.name, weight: weight?.name, profile_complete: 30, profileFor: profileFor?.Profile_For, id: userInfo._id }
        console.log(data)


        fetch('https://soulmates-server-two.vercel.app/update1', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                reset();
                navigate("/userinfo2");
            })

    };



    return (
        <div>
            <div className="bg-green-200 h-2" style={{ width: `${10}%` }}></div>
            <section className="lg:max-w-4xl w-[90%]   mx-auto rounded-md shadow-xl my-10  bg-opacity-10">
                <div className='flex justify-center bg-[#fa604c] p-2 rounded-t-xl w-full'> <h1 className="text-xl font-bold text-white capitalize">Personal Information</h1></div>
                <form className='p-10' onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <div>
                            <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Gender</label>
                            <div className='flex gap-4'>
                                <div className='flex gap-5 mt-3 '>
                                    <label className="cursor-pointer ">
                                        <input type="radio" className="peer sr-only " name="gender" onChange={() => setSelectedOption({ Gender: "Male" })} />
                                        <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2 ">
                                            <div className="flex flex-col px-2">
                                                <div className="flex  gap-1 items-center justify-center px-2">
                                                    <div>
                                                        <BiMale className='text-lg'></BiMale>
                                                    </div>
                                                    <p><span value="Gender" className="sm:text-lg ">Male</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </label>

                                </div>
                                <div className='flex gap-5 mt-3'>
                                    <label className="cursor-pointer">
                                        <input type="radio" className="peer sr-only" name="gender" onChange={() => setSelectedOption({ Gender: "Female" })} />
                                        <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                            <div className="flex flex-col ">
                                                <div className="flex  gap-1 items-center justify-center px-2">
                                                    <div>
                                                        <BiFemale className='text-lg'></BiFemale>
                                                    </div>
                                                    <p><span value="Gender" className="sm:text-lg ">Female</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </label>

                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Marital Status</label>
                            <div className='flex gap-4 flex-wrap'>
                                <div className='flex gap-5 mt-3 '>
                                    <label className="cursor-pointer ">
                                        <input type="radio" className="peer sr-only " name="maritalStatus" onChange={() => setMaritalStatus({ maritalStatus: "Single" })} />
                                        <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2 ">
                                            <div className="flex flex-col px-2">
                                                <div className="flex  gap-1 items-center justify-center px-2">
                                                    <p><span className="sm:text-lg ">Single</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </label>

                                </div>
                                <div className='flex gap-5 mt-3'>
                                    <label className="cursor-pointer">
                                        <input type="radio" className="peer sr-only" name="maritalStatus" onChange={() => setMaritalStatus({ maritalStatus: "Married" })} />
                                        <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                            <div className="flex flex-col ">
                                                <div className="flex  gap-1 items-center justify-center px-2">
                                                    <p><span className="sm:text-lg ">Married</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </label>

                                </div>
                                <div className='flex gap-5 mt-3 '>
                                    <label className="cursor-pointer">
                                        <input type="radio" className="peer sr-only" name="maritalStatus" onChange={() => setMaritalStatus({ maritalStatus: "Divorced" })} />
                                        <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2 ">
                                            <div className="flex flex-col ">
                                                <div className="flex  gap-1 items-center justify-center px-2">
                                                    <p><span className="sm:text-lg ">Divorced</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </label>

                                </div>
                                <div className='flex gap-5 mt-3 '>
                                    <label className="cursor-pointer">
                                        <input type="radio" className="peer sr-only" name="maritalStatus" onChange={() => setMaritalStatus({ maritalStatus: "Widowed" })} />
                                        <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2 ">
                                            <div className="flex flex-col ">
                                                <div className="flex  gap-1 items-center justify-center px-2">
                                                    <p><span className="sm:text-lg ">Widowed</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </label>

                                </div>
                                <div className='flex gap-5 mt-3 '>
                                    <label className="cursor-pointer">
                                        <input type="radio" className="peer sr-only" name="maritalStatus" onChange={() => setMaritalStatus({ maritalStatus: "Separated" })} />
                                        <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2 ">
                                            <div className="flex flex-col ">
                                                <div className="flex  gap-1 items-center justify-center px-2">
                                                    <p><span className="sm:text-lg ">Separated</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </label>

                                </div>
                                <div className='flex gap-5 mt-3 '>
                                    <label className="cursor-pointer">
                                        <input type="radio" className="peer sr-only" name="maritalStatus" onChange={() => setMaritalStatus({ maritalStatus: "Other" })} />
                                        <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2 ">
                                            <div className="flex flex-col ">
                                                <div className="flex  gap-1 items-center justify-center px-2">
                                                    <p><span className="sm:text-lg ">Other</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </label>

                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Religion</label>
                            <div className='flex gap-4 flex-wrap'>
                                <div className='flex gap-5 mt-3 '>
                                    <label className="cursor-pointer ">
                                        <input type="radio" className="peer sr-only " name="religion" onChange={() => setReligion({ Religion: "Muslim" })} />
                                        <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2 ">
                                            <div className="flex flex-col px-2">
                                                <div className="flex  gap-1 items-center justify-center px-2">
                                                    <p><span className="sm:text-lg ">Muslim</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div className='flex gap-4'>
                                    <div className='flex gap-5 mt-3 '>
                                        <label className="cursor-pointer ">
                                            <input type="radio" className="peer sr-only " name="religion" onChange={() => setReligion({ Religion: "Hindu" })} />
                                            <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2 ">
                                                <div className="flex flex-col px-2">
                                                    <div className="flex  gap-1 items-center justify-center px-2">
                                                        <p><span className="sm:text-lg ">Hindu</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <div className='flex gap-5 mt-3 '>
                                        <label className="cursor-pointer ">
                                            <input type="radio" className="peer sr-only " name="religion" onChange={() => setReligion({ Religion: "Christian" })} />
                                            <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2 ">
                                                <div className="flex flex-col px-2">
                                                    <div className="flex  gap-1 items-center justify-center px-2">
                                                        <p><span className="sm:text-lg ">Christian</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className='flex gap-5 mt-3 '>
                                        <label className="cursor-pointer ">
                                            <input type="radio" className="peer sr-only " name="religion" onChange={() => setReligion({ Religion: "Buddhist" })} />
                                            <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2 ">
                                                <div className="flex flex-col px-2">
                                                    <div className="flex  gap-1 items-center justify-center px-2">
                                                        <p><span className="sm:text-lg ">Buddhist</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <div className='flex gap-5 mt-3 '>
                                        <label className="cursor-pointer ">
                                            <input type="radio" className="peer sr-only " name="religion" onChange={() => setReligion({ Religion: "Non Religious" })} />
                                            <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2 ">
                                                <div className="flex flex-col px-2">
                                                    <div className="flex  gap-1 items-center justify-center px-2">
                                                        <p><span className="sm:text-lg ">Non Religious</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <div className='flex gap-5 mt-3 '>
                                        <label className="cursor-pointer ">
                                            <input type="radio" className="peer sr-only " name="religion" onChange={() => setReligion({ Religion: "Other" })} />
                                            <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2 ">
                                                <div className="flex flex-col px-2">
                                                    <div className="flex  gap-1 items-center justify-center px-2">
                                                        <p><span className="sm:text-lg ">Other</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='mt-10 '>
                            <div className="grid md:grid-cols-3 rounded-lg  gap-5">
                                <div className='z-40'>
                                    <p className="text-black text-lg font-semibold">Country :</p>
                                    <Selector
                                        data={countryData}
                                        selected={country}
                                        setSelected={setCountry}
                                    />
                                </div>
                                {state && (
                                    <div className='z-40'>
                                        <p className="text-black text-lg font-semibold">State :</p>
                                        <Selector
                                            data={stateData}
                                            selected={state}
                                            setSelected={setState}
                                        />
                                    </div>
                                )}
                                {city && (
                                    <div className='z-40'>
                                        <p className="text-black text-lg font-semibold">City :</p>
                                        <Selector data={cityData} selected={city} setSelected={setCity} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='lg:flex lg:gap-10'>
                            <div className='mt-10 lg:w-[50%] z-30'>
                                <label className="text-black text-lg font-semibold" htmlFor="standard_success ">Phone number</label>
                                <div className='mt-4'><PhoneInput inputProps={{ name: 'phone', required: true, autoFocus: true }} country={phoneNumber} onChange={(value => { setPhoneNumber(value) })} /></div>
                            </div>

                            <div className='mt-10 lg:w-[50%]'>
                                <label className="text-black text-lg font-semibold" htmlFor="standard_success">Date of Birth</label>
                                <input {...register("birth", { required: true })} id="standard_success" aria-describedby="standard_success_help" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-[#51ac83] focus:outline-none peer-checked:ring-[#51ac83] " />
                            </div>
                        </div>


                        {/* ------------------------------------------------------ */}
                        <div className='lg:flex lg:gap-10'>
                            <div className="mt-10 z-10 lg:w-[50%]">
                                <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Height</label>
                                <div className='flex gap-4 flex-wrap'>
                                    <Listbox value={setheight} onChange={setheight}>
                                        <div className="relative mt-1 w-full z-10">
                                            <Listbox.Button className=" relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                <span className="block truncate">{height ? height.name : "Default"}</span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <HiChevronUpDown
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {heightOptions.map((myHeight) => (
                                                        <Listbox.Option
                                                            key={myHeight.id}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                                }`
                                                            }
                                                            value={myHeight}
                                                        >
                                                            {({ selected }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                            }`}
                                                                    >
                                                                        {myHeight.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                            <HiCheck className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </Listbox>
                                </div>
                            </div>
                            <div className="mt-10 z-10 lg:w-[50%]">
                                <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Weight</label>
                                <div className='flex gap-4 flex-wrap'>
                                    <Listbox value={setWeight} onChange={setWeight}>
                                        <div className="relative mt-1 w-full">
                                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                <span className="block truncate">{weight ? weight.name : "Default"}</span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <HiChevronUpDown
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {weightOptions.map((value) => (
                                                        <Listbox.Option
                                                            key={value.id}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                                }`
                                                            }
                                                            value={value}
                                                        >
                                                            {({ selected }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                            }`}
                                                                    >
                                                                        {value.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                            <HiCheck className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </Listbox>
                                </div>
                            </div>



                    </div>
                </div>
                {error && (
                    <div className="text-red-500 mt-4 text-center">
                        {error}
                    </div>
                )}
                <div className="flex justify-center mt-10">
                    <button disabled={!selectedOption.Gender || !maritalStatus.maritalStatus || !religion.Religion || country === "Country" || !height?.name} type='submit' className="btn px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#fa604c] rounded-md hover:bg-[#943f34] focus:outline-none focus:bg-gray-600">Continue<BsFillArrowRightCircleFill /></button>
                </div>
            </form>
        </section>

        </div >
    );
};

export default UserInfo1;