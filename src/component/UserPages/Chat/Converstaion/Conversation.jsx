import "./conversation.css"
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const Conversation = ({ conversation, currentUser, messages, selected }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const friendId = conversation?.members.find((m) => m !== currentUser._id);
        const getUser = async () => {
            //finding user
            try {
                const res = await axios(`https://soulmates-server.vercel.app/specificUser/${friendId}`)
                setUser(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [currentUser, conversation])
    return (
        <div className={` p- ${selected ? ' border border-t-0 border-b-0 bg-red-50 ' : ''}`}>

            <div className={selected ? 'flex justify-between bg-gradient-to-l from-primary-100 cursor-pointer ' : 'flex justify-between hover:bg-gray-200 cursor-pointer'}>
                <div className="flex py-2 px-6">
                    <div className="w-[90px]">
                        <img src={user?.profileImage} className='conversationImg' alt="" />
                    </div>
                    <div className="w-full px-2 flex flex-col justify-evenly">
                        <div className="flex justify-between items-end">
                            <p className='text-[#434656] font-alice text-xl'>{user?.name}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className='text-[14px] font-lato text-[#8695AC] '>{messages?.text}</p>
                        </div>
                    </div>
                </div>

                {selected && <div className="bg-primary-500 w-2"></div>}
            </div>
        </div>
    );
};

export default Conversation;