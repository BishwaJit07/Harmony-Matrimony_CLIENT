
import axios from "axios";
import "./Message.css"
import { format } from 'timeago.js';
import { useState } from "react";
import { useEffect } from "react";
import noProfile from "../../../../assets/other/blank.png"

const Message = ({ message, own }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            //finding user
            try {
                const res = await axios(`https://soulmates-server.vercel.app/specificUser/${message?.sender}`)
                setUser(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [message])


    return (
      <>
            <div className={ own ? "chat chat-end mb-2" : "chat chat-start mb-2"}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        {user?.profileImage ?
                            <><img src={user?.profileImage} /></> :
                            <><img src={noProfile} /></>
                        }
                    </div>
                </div>
                <div className="chat-header">
                    {user?.name}
                </div>
                <div className="chat-bubble bg-[#FF7474]  text-white ">{message?.text}</div>
                    <time className=" text-xs opacity-50 text-center">{format(message?.createdAt)}</time>
            </div>
      
      </>





    );
};

export default Message;


