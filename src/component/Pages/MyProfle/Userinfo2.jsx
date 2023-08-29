import { Listbox, Transition } from '@headlessui/react';
import  { useState, Fragment } from 'react';
import { useForm } from "react-hook-form";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2';
import useMyData from '../../../Hooks/useMyData';
import { useNavigate } from 'react-router-dom';


const educations = [
    { id: 1, name: 'School' },
    { id: 2, name: 'High School' },
    { id: 3, name: 'Intermediate' },
    { id: 4, name: 'College' },
    { id: 5, name: 'Undergraduate' },
    { id: 6, name: 'Graduate' },
    { id: 7, name: "Other" }
];

const working_In = [
    { id: 1, name: 'Private Company' },
    { id: 2, name: 'Government' },
    { id: 3, name: 'Defense' },
    { id: 4, name: 'Business' },
    { id: 5, name: 'Self Employed' },
    { id: 6, name: 'Freelancer' },
    { id: 7, name: "Not Working" }
];

// Add more options as needed

const highestQualification = [
    { id: 1, name: 'High School Diploma' },
    { id: 2, name: 'Associate Degree' },
    { id: 3, name: 'Bachelor\'s Degree' },
    { id: 4, name: 'Master\'s Degree' },
    { id: 5, name: 'Ph.D.' },
    { id: 6, name: 'Professional Degree (e.g., MD, JD)' },
    { id: 7, name: 'Technical/Vocational Training' },
    { id: 8, name: 'Diploma' },
    { id: 9, name: 'Certificate Program' },
    { id: 10, name: 'Trade School' },
    { id: 11, name: 'Postdoctoral Fellowship' },
    { id: 12, name: 'High School Equivalency (GED)' },
    { id: 13, name: 'Non-Degree Program' },
    { id: 14, name: 'Apprenticeship' },
    { id: 15, name: 'Online Course Certification' },
    { id: 16, name: 'B.Sc' },
    { id: 17, name: 'B.Sc (Hons)' },
    { id: 18, name: 'M.Sc' },
    { id: 19, name: 'M.Sc (Hons)' },
    { id: 20, name: 'B.E/B.Tech' },
    { id: 21, name: 'M.E/M.Tech' },
    { id: 22, name: 'B.A' },
    { id: 23, name: 'M.A' },
    { id: 24, name: 'B.Ed' },
    { id: 25, name: 'B.Arch' },
    { id: 26, name: 'B.Com' },
    { id: 27, name: 'CPA' },
    { id: 28, name: 'CFA' },
    { id: 29, name: 'CS' },
    { id: 30, name: 'BCA' },
    { id: 31, name: 'BIT' },
    { id: 32, name: 'MBBS' },
    { id: 33, name: 'BDS' },
    { id: 34, name: 'BBA' },
    { id: 35, name: 'BBM' },
    { id: 36, name: 'LLB' },
    { id: 37, name: 'LPC' },
    { id: 38, name: 'MBA' },
    { id: 39, name: 'MCA' },
    { id: 40, name: 'MPH' },
    { id: 41, name: 'PharmD' },
    { id: 42, name: 'DPT' },
    { id: 43, name: 'DDS' },
    { id: 44, name: 'MSW' },
    { id: 45, name: 'RN' },
    { id: 46, name: 'Pharmacist' },
    { id: 47, name: 'Radiologic Technologist' },
    { id: 48, name: 'Chartered Accountant (CA)' },
    { id: 49, name: 'ICWA' },
    { id: 50, name: 'ACCA' },
    { id: 51, name: 'Other' },
];

const workingAsOptions = [
    { id: 1, name: 'Banking Professional' },
    { id: 2, name: 'Chartered Accountant' },
    { id: 3, name: 'Finance Professional' },
    { id: 4, name: 'Admin Professional' },
    { id: 5, name: 'Event Manager' },
    { id: 6, name: 'Actor' },
    { id: 7, name: 'Farming' },
    { id: 8, name: 'Journalist' },
    { id: 9, name: 'Pilot' },
    { id: 10, name: 'Air Hostess' },
    { id: 11, name: 'Animator' },
    { id: 12, name: 'Web Designer' },
    { id: 13, name: 'Web Developer' },
    { id: 14, name: 'Doctor' },
    { id: 15, name: 'Nurse' },
    { id: 16, name: 'Teacher' },
    { id: 17, name: 'Engineer' },
    { id: 18, name: 'Lawyer' },
    { id: 19, name: 'Architect' },
    { id: 20, name: 'Marketing Professional' },
    { id: 21, name: 'Sales Professional' },
    { id: 22, name: 'Consultant' },
    { id: 23, name: 'Designer' },
    { id: 24, name: 'Researcher' },
    { id: 25, name: 'Writer' },
    { id: 26, name: 'Photographer' },
    { id: 27, name: 'Chef' },
    { id: 28, name: 'Fitness Instructor' },
    { id: 29, name: 'Social Worker' },
    { id: 30, name: 'Travel Agent' },
    { id: 31, name: 'Artist' },
    { id: 32, name: 'Musician' },
    { id: 33, name: 'Graphic Designer' },
    { id: 34, name: 'HR Professional' },
    { id: 35, name: 'IT Professional' },
    { id: 36, name: 'Software Engineer' },
    { id: 37, name: 'Data Scientist' },
    { id: 38, name: 'Project Manager' },
    { id: 39, name: 'Entrepreneur' },
    { id: 40, name: 'Fashion Designer' },
    { id: 41, name: 'Interior Designer' },
    { id: 42, name: 'Archaeologist' },
    { id: 43, name: 'Biologist' },
    { id: 44, name: 'Chemist' },
    { id: 45, name: 'Physicist' },
    { id: 46, name: 'Astronomer' },
    { id: 47, name: 'Geologist' },
    { id: 48, name: 'Psychologist' },
    { id: 49, name: 'Sociologist' },
    { id: 50, name: 'Economist' },
    { id: 51, name: 'Historian' },
    { id: 52, name: 'Librarian' },
    { id: 53, name: 'Translator' },
    { id: 54, name: 'Veterinarian' },
    { id: 55, name: 'Zoologist' },
    { id: 56, name: 'Mechanic' },
    { id: 57, name: 'Electrician' },
    { id: 58, name: 'Plumber' },
    { id: 59, name: 'Carpenter' },
    { id: 60, name: 'Welder' },
    { id: 61, name: 'Fashion Model' },
    { id: 62, name: 'Fitness Trainer' },
    { id: 63, name: 'Yoga Instructor' },
    { id: 64, name: 'Archivist' },
    { id: 65, name: 'Curator' },
    { id: 66, name: 'Librarian' },
    { id: 67, name: 'Mechanical Engineer' },
    { id: 68, name: 'Civil Engineer' },
    { id: 69, name: 'Chemical Engineer' },
    { id: 70, name: 'Biomedical Engineer' },
    { id: 71, name: 'Electrical Engineer' },
    { id: 72, name: 'Environmental Scientist' },
    { id: 73, name: 'Social Media Manager' },
    { id: 74, name: 'Digital Marketer' },
    { id: 75, name: 'Content Writer' },
    { id: 76, name: 'UX/UI Designer' },
    { id: 77, name: 'Animator' },
    { id: 78, name: 'Video Editor' },
    { id: 79, name: 'Dentist' },
    { id: 80, name: 'Pharmacist' },
    { id: 81, name: 'Physician Assistant' },
    { id: 82, name: 'Physical Therapist' },
    { id: 83, name: 'Speech Therapist' },
    { id: 84, name: 'Occupational Therapist' },
    { id: 85, name: 'Financial Analyst' },
    { id: 86, name: 'Market Research Analyst' },
    { id: 87, name: 'Statistician' },
    { id: 88, name: 'Real Estate Agent' },
    { id: 89, name: 'Insurance Agent' },
    { id: 90, name: 'Flight Attendant' },
    { id: 91, name: 'Police Officer' },
    { id: 92, name: 'Firefighter' },
    { id: 93, name: 'Paramedic' },
    { id: 94, name: 'EMT' },
    { id: 95, name: 'Air Traffic Controller' },
    { id: 96, name: 'Marine Biologist' },
    { id: 97, name: 'Botanist' },
    { id: 98, name: 'Meteorologist' },
    { id: 99, name: 'Geographer' },
    { id: 100, name: 'Counselor' },
    { id: 101, name: 'Other' },
];

const salaryOptions = [

    { id: 0, name: 'Below $10,000' },
    { id: 1, name: '$10,000 - $10,000' },
    { id: 2, name: '$20,000 - $30,000' },
    { id: 3, name: '$30,000 - $40,000' },
    { id: 4, name: '$40,000 - $50,000' },
    { id: 5, name: '$50,000 - $60,000' },
    { id: 6, name: '$60,000 - $70,000' },
    { id: 7, name: '$70,000 - $80,000' },
    { id: 8, name: '$80,000 - $90,000' },
    { id: 9, name: '$90,000 - $100,000' },
    { id: 10, name: '$100,000 - $150,000' },
    { id: 11, name: '$150,000 - $200,000' },
    { id: 19, name: '$200,000 - $250,000' },
    { id: 20, name: '$250,000 - $300,000' },
    { id: 21, name: '$300,000 - $400,000' },
    { id: 22, name: '$400,000 - $500,000' },
    { id: 23, name: '$500,000 - $1,000,000' },
    { id: 24, name: 'Above $1,000,000' },
];




const Userinfo2 = () => {
    const { handleSubmit, reset } = useForm();
    const [userInfo] = useMyData();
    const navigate = useNavigate();
    const [education, setEducation] = useState({});
    const [qualifications, setQualification] = useState(null);
    const [workingIn, setWorkingIn] = useState({});
    const [salary, setSalary] = useState(null);
    const [jobSector, setJobSector] = useState(null);
    const onSubmit = () => {
        const userinfo = { education: education.educationValue, qualifications: qualifications?.name, workingIn: workingIn.workingCategory, jobSector: jobSector?.name , salary: salary?.name , profile_complete:45 , id: userInfo._id}

        fetch('https://soulmates-server-two.vercel.app/update2', {
            method: "PUT",
            headers: {
              "content-type" : "application/json"
            },
            body: JSON.stringify(userinfo)
          })
            .then(res => res.json())
            .then(data => {  
                console.log(data)   
                reset();
                navigate("/userinfo3");
            })
    }
    return (
        <div>
            <div className="bg-green-200 h-2" style={{ width: `${30}%` }}></div>
            <section className=" w-[90%] lg:max-w-4xl  mx-auto rounded-md shadow-xl my-10  bg-opacity-10">
                <div className='flex justify-center bg-[#fa604c] p-2 rounded-t-xl w-full'> <h1 className="text-xl font-bold text-white capitalize">Education & Job Information</h1></div>
                <form className='p-10' onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Education</label>
                        <div className='flex gap-4 flex-wrap'>
                            {educations.map((education) =>
                                <div key={education.id}>
                                    <div className='flex gap-5 mt-3'>
                                        <label className="cursor-pointer">
                                            <input type="radio" className="peer sr-only" name="education" onChange={() => setEducation({ educationValue: education?.name })} />
                                            <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex  gap-1 items-center justify-center px-2">
                                                        <p><span value="Gender" className="sm:text-lg ">{education?.name}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                    {education.educationValue === "Other" || education.educationValue === 'Graduate' || education.educationValue === 'Undergraduate' ? <>
                        <div className="mt-10">
                            <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Highest Qualification</label>
                            <div className='flex gap-4 flex-wrap'>
                                <Listbox value={setQualification} onChange={setQualification}>
                                    <div className="relative mt-1 w-full">
                                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                            <span className="block truncate">{qualifications ? qualifications.name : "Default"}</span>
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
                                                {highestQualification.map((qualification) => (
                                                    <Listbox.Option
                                                        key={qualification.id}
                                                        className={({ active }) =>
                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                            }`
                                                        }
                                                        value={qualification}
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <span
                                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                        }`}
                                                                >
                                                                    {qualification.name}
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
                    </> : <></>}

                    <div className="mt-10">
                        <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Working</label>
                        <div className='flex gap-4 flex-wrap'>
                            {working_In.map((work) =>
                                <div key={work.id}>
                                    <div className='flex gap-5 mt-3'>
                                        <label className="cursor-pointer">
                                            <input type="radio" className="peer sr-only" name="working" onChange={() => setWorkingIn({ workingCategory: work?.name })} />
                                            <div className=" max-w-xl rounded-3xl bg-gray-100 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex  gap-1 items-center justify-center px-2">
                                                        <p><span value="Gender" className="sm:text-lg ">{work?.name}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                    {workingIn.workingCategory === "Defense" || workingIn.workingCategory === "Government" || workingIn.workingCategory === "Private Company" ? <>
                        <div className="mt-10">
                            <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Working Field</label>
                            <div className='flex gap-4 flex-wrap  '>
                                <Listbox value={setJobSector} onChange={setJobSector}>
                                    <div className="relative mt-1 w-full z-20">
                                        <Listbox.Button className=" relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                            <span className="block truncate">{jobSector ? jobSector.name : "Default"}</span>
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
                                                {workingAsOptions.map((workingOption) => (
                                                    <Listbox.Option
                                                        key={workingOption.id}
                                                        className={({ active }) =>
                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                            }`
                                                        }
                                                        value={workingOption}
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <span
                                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                        }`}
                                                                >
                                                                    {workingOption.name}
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
                    </> : <></>}
                    
                    {workingIn.workingCategory ? <>
                        <div className="mt-10 z-10">
                            <label className="text-black text-lg font-semibold" htmlFor="emailAddress">Yearly Income</label>
                            <div className='flex gap-4 flex-wrap'>
                                <Listbox value={setSalary} onChange={setSalary}>
                                    <div className="relative mt-1 w-full z-10">
                                        <Listbox.Button className=" relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                            <span className="block truncate">{salary ? salary.name : "Default"}</span>
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
                                                {salaryOptions.map((salary) => (
                                                    <Listbox.Option
                                                        key={salary.id}
                                                        className={({ active }) =>
                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                            }`
                                                        }
                                                        value={salary}
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <span
                                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                        }`}
                                                                >
                                                                    {salary.name}
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
                    </> : <></>}

                    


                   
                    <div className="flex justify-center mt-10">
                        <button disabled={ !education.educationValue || !workingIn.workingCategory || !salary?.name  }  type='submit' className="btn px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#fa604c] rounded-md hover:bg-[#943f34] focus:outline-none focus:bg-gray-600">Continue<BsFillArrowRightCircleFill /></button>
                    </div>
                </form>
            </section>

        </div>

    );
};

export default Userinfo2;