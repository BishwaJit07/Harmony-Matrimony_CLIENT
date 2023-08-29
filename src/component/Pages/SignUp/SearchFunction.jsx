import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { BsSearchHeartFill } from "react-icons/bs";
import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiChevronUpDown, HiCheck } from "react-icons/hi2";
import { Range, getTrackBackground } from 'react-range';
import ReactDOM from "react-dom";



const genderOptions = [
    { id: 1, name: 'Woman' },
    { id: 2, name: 'Man' },
];

const ageOptions = [
    { id: 1, name: '20 to 23' },
    { id: 2, name: '24 to 27' },
    { id: 3, name: '28 to 31' },
    { id: 4, name: '32 to 35' },
    { id: 5, name: '36 to 40' },
];

const religionOptions = [
    { id: 1, name: 'Hindu' },
    { id: 2, name: 'Muslim' },
    { id: 3, name: 'Christian' },
    { id: 4, name: 'Buddhist' },
    { id: 5, name: 'Jewish' },
    { id: 6, name: 'No Religion' },
    { id: 7, name: 'Other' },
];

const countryOptions = [
    { id: 1, name: 'Bangladesh' },
    { id: 2, name: 'India' },
    { id: 3, name: 'Pakistan' },
    { id: 4, name: 'USA' },
    { id: 5, name: 'UK' },
    { id: 6, name: 'Canada' },
    { id: 7, name: 'Australia' },
    { id: 8, name: 'Saudi Arabia' },
];
const SearchFunction = () => {
    const [selectedCountry, setSelectedCountry] = useState(countryOptions[0])
    console.log(selectedCountry)
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // navigate('/alluser', {
        //     state: data,
        // });
        console.log(data)
    };

    const [ageRange, setAgeRange] = useState([18, 60]);

    const handleAgeChange = (newAgeRange) => {
        setAgeRange(newAgeRange);
    };

    console.log(ageRange)

    return (



        // <Listbox value={setSelectedCountry} onChange={setSelectedCountry}>
        //     <Listbox.Button>{selectedCountry.name}</Listbox.Button>
        //     <Listbox.Options>
        //         {countryOptions.map((country) => (
        //             <Listbox.Option
        //                 key={country.id}
        //                 value={country}
        //             >
        //                 {country.name}
        //             </Listbox.Option>
        //         ))}
        //     </Listbox.Options>
        // </Listbox>
        <div className="fixed top-16 w-72">
            <Listbox value={setSelectedCountry} onChange={setSelectedCountry}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selectedCountry.name}</span>
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
                            {countryOptions.map((country) => (
                                <Listbox.Option
                                    key={country.id}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={country}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {country.name}
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

            <div className="flex flex-col items-center mt-8 w-96">
                <h2 className="text-lg font-semibold mb-4">Age Filter</h2>
                <div className="flex items-center space-x-4 w-96">
                    <Range
                        values={ageRange}
                        step={1}
                        min={18}
                        max={100}
                        onChange={handleAgeChange}
                        renderTrack={({ props, children }) => (
                            <div
                                {...props}
                                className="h-2 bg-gray-300 rounded-full w-full"
                                style={{
                                    ...props.style,
                                    height: '6px',
                                    width: '100%',
                                    backgroundColor: '#ccc'
                                }}
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({ props, index }) => (
                            <div
                                {...props}
                                className="h-6 w-6 bg-[#EBFFF6] rounded-full shadow flex items-center justify-center relative"
                            >
                                <span
                                    className={`absolute -top-11 text-sm text-white bg-gray-500 p-1 rounded-full tooltip  ${index === 0 ? 'left-0' : 'right-0'
                                        }`}
                                >
                                    {ageRange[index]}
                                </span>
                            </div>
                        )}
                    />
                </div>
                <div className="flex justify-between w-full">
                    <span>Age: {ageRange[0]}</span>
                    <span>Age: {ageRange[1]}</span>
                </div>
            </div>

           
        </div>


    );
};

export default SearchFunction;
