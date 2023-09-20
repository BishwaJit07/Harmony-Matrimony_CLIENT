import Swal from 'sweetalert2';
import profile from '../../../../assets/chat/profile.svg'
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const MeetAndProposal = ({ friend , userInfo }) => {
    const [showModal8, setShowModal8] = useState(false);
    const [metForm, setMetForm] = useState(false)
    const { register, handleSubmit } = useForm();
    const showModal = () => {
        setShowModal8(true);
        setMetForm(true);
    };




    const onSubmit = (data) => {
        const setMet = {
            userId: userInfo._id,
            partner: data.id,
            metDate: new Date(data.date),
            status: "pending",
        };

        axios.post(
                `https://soulmates-server.vercel.app/setMeeting?email=${friend?.email}`,
                setMet
            )
            .then((response) => {
                if (response.data.insertedId) {
                    setShowModal8(false);
                    Swal.fire("Wait!", "Your Meeting is pending now", "success");
                }
            });
    };
    
    return (
        <div>
            {showModal8 ? (
                <>
                    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-60 backdrop-blur-xl backdrop-filter bg-gray-300">
                        <div className="bg-white p-4 sm:p-10 rounded-lg shadow-2xl card relative">
                            <button
                                onClick={() => setShowModal8(false)}
                                className=" bg-[#FF725E] text-white py-2 px-4 rounded-md w-fit absolute top-2 right-2"
                            >
                                X
                            </button>

                            {metForm ? (
                                <>
                                    <div className="md:card-body ">
                                        <p className="text-lg font-medium text-center">
                                            Set Metting With {friend?.name}
                                        </p>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input
                                                type="hidden"
                                                value={friend?._id}
                                                className="w-full text-blue-950"
                                                {...register("id", { required: true })}
                                            />

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Select Your Date</span>
                                                </label>
                                                <label className="input-group">
                                                    <span>Date</span>
                                                    <input
                                                        type="datetime-local"
                                                        className="input input-bordered"
                                                        {...register("date", { required: true })}
                                                    />
                                                </label>
                                            </div>
                                            <div className="mt-5 text-center">
                                                <button className="w-3/6 bg-[#FF725E] text-white py-2 px-4 rounded-md">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </>
            ) : null}


            <div className="col-span-3 ">
                <img className='w-[150px] h-[150px] rounded-full object-cover object-top mx-auto mt-8' src={friend?.profileImage} alt="" />
                <p className='text-[#434656] text-[28px] text-center font-alice mt-4 '>{friend?.name}</p>
                <p className='text-[#4ECA77] font-lato text-[16px] text-center'>Online</p>
                <div className=" flex  mx-auto gap-4 justify-center mt-3">
                    <img className='p-1 rounded-full bg-red-200' src={profile} alt="" />

                </div>

                <div className="flex justify-center gap-3 mt-8">
                    <button className='py-4 px-4 bg-[#128587] text-[#F0F2F5] rounded-full' onClick={showModal}>Invite Meeting</button>
                    <button className='py-4 px-4 bg-[#2F9D54] text-[#F0F2F5] rounded-full'>Relationship Req</button>
                </div>
            </div>
        </div>
    );
};

export default MeetAndProposal;