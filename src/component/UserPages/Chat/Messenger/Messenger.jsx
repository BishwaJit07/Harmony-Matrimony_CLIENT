import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import useMyData from "../../../../Hooks/useMyData";
import "./messanger.css";
import Conversation from "../Converstaion/Conversation";
import Message from "../Message/Message";
import { useRef } from "react";
import { io } from "socket.io-client";
import ChatOnline from "../ChatOnline/ChatOnline";
import video from "../../../../assets/chat/video.svg";
import call from "../../../../assets/chat/call.svg";
import send from "../../../../assets/chat/send.svg";
import MeetAndProposal from "../Meet and proposal/MeetAndProposal";
const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [userInfo, refetch] = useMyData();
  const socket = useRef();
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [lastMessages, setLastMessages] = useState([]);
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    socket.current = io(
      "https://socket-io-chat-app-5f87e6d4f1ce.herokuapp.com/"
    );
    console.log(socket.current);
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  // get add connected socket user
  useEffect(() => {
    socket.current?.emit("addUser", userInfo._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(users);
      // user.followings.filter((following) => users.some((u) => u.userId === following))
    });
  });

  //get arrival message
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  //----------------socket id related work end----------------------//
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          "https://soulmates-server.vercel.app/conversations/" + userInfo._id
        );
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [userInfo._id]);

  // get all previous message on currentChat
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          "https://soulmates-server.vercel.app/messages/" + currentChat?._id
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  // get last conversation message
  const getLastMessagesForConversations = async () => {
    const lastMessages = [];
    for (const conversation of conversations) {
      try {
        const res = await axios.get(
          `https://soulmates-server.vercel.app/messages/${conversation._id}`
        );
        const lastMessage = res.data[res.data.length - 1];
        lastMessages.push(lastMessage);
      } catch (err) {
        console.log(err);
      }
    }
    return lastMessages;
  };

  useEffect(() => {
    getLastMessagesForConversations().then((messages) => {
      setLastMessages(messages);
    });
  }, [conversations]);

  // Fetch friend's data when currentChat changes
  useEffect(() => {
    const fetchFriendData = async () => {
      if (currentChat) {
        const friendId = currentChat.members.find((m) => m !== userInfo._id);
        try {
          const res = await axios.get(
            `https://soulmates-server.vercel.app/specificUser/${friendId}`
          );
          setFriend(res.data); // Update friend's data
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchFriendData();
  }, [currentChat, userInfo._id]);

  //post message
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: userInfo._id,
      text: newMessages,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== userInfo._id
    );

    socket.current.emit("sendMessage", {
      senderId: userInfo._id,
      receiverId,
      text: newMessages,
    });

    try {
      const res = await axios.post(
        "https://soulmates-server.vercel.app/messages",
        message
      );
      setMessages([...messages, res.data]);
      setNewMessages("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="h-[calc(100vh-70px) flex">
      {/* Chat menu */}
      <div className="  w-[350px] bg-slate-50 pb-10">
        <div>
          <h2 className="text-center">Online</h2>
          <ChatOnline
            onlineUsers={onlineUsers}
            currentId={userInfo._id}
            setCurrentChat={setCurrentChat}
            refetch={refetch}
          />
        </div>
        <div className="overflow-y-scroll h-[770px] ">
          <h2 className="text-center text-xl font-alice">
            Message {conversations.length}
          </h2>
          {conversations.map((conversation, index) => (
            <div
              key={conversation._id}
              onClick={() => setCurrentChat(conversation)}
            >
              <Conversation
                conversation={conversation}
                messages={lastMessages[index]}
                currentUser={userInfo}
                selected={currentChat && currentChat._id === conversation._id}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="chatBox mb-10 bg-red-50">
        <div className="chatBoxWrapper ">
          {currentChat ? (
            <>
              <div className="">
                <div className="flex justify-between px-5 py-5  items-center shadow-sm flex-none">
                  {/* img and name */}
                  <div className="flex items-center gap-2 ">
                    <img
                      className="w-[50px] h-[50px] rounded-full object-cover object-top "
                      src={friend?.profileImage}
                      alt=""
                    />
                    <div className="">
                      <p className="text-[#434656] font-alice text-[18px]">
                        {friend?.name}
                      </p>
                      <p className="font-lato text-[#4ECA77] text-[12px]  ">
                        Online
                      </p>
                    </div>
                  </div>
                  {/* call icons */}
                  <div className="flex gap-6">
                    <img className="w-[30px] h-[30px] " src={call} alt="" />
                    <img className="w-[30px] h-[30px] " src={video} alt="" />
                  </div>
                </div>
              </div>
              <div className="chatBoxTop bg-re">
                {messages.map((message) => (
                  <Message
                    key={message._id}
                    message={message}
                    own={message.sender === userInfo._id}
                  ></Message>
                ))}
              </div>
              <div className="px-4 flex-none mb-4 flex justify-between items-center">
                <textarea
                  className="font-lato text-[20px] w-[90%] bg-[#EDDEDE] px-5 py-3 rounded-xl resize-x  textarea"
                  placeholder="Message..."
                  type="text"
                  onChange={(e) => setNewMessages(e.target.value)}
                  value={newMessages}
                />
                <div className="" onClick={handleSubmit}>
                  <img
                    className="p-3 bg-gradient-to-tl from-[#FE3535] to-[#FFD5D5] rounded-full "
                    src={send}
                    alt=""
                  />
                </div>
              </div>
            </>
          ) : (
            <span className="noConversationText">
              Open a conversation to stat a chat
            </span>
          )}
        </div>
      </div>
      {/* chat online */}
      <div className="chatOnline ">
        <div className="chatOnlineWrapper">
          {currentChat ? (
            <>
              <MeetAndProposal friend={friend}></MeetAndProposal>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messenger;
