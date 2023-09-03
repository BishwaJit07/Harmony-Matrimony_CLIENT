

import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { db } from "../Firebase/firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { user } = useContext(AuthContext);
  
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if(value.trim() === "") {
      alert("Enter valid message!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = user; 
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    } catch(error) {
      console.log(error);
    }
    setValue("");
  }

  return (
    <div className="bg-gray-200 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" />
        <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
      </form>
    </div>
  )
}

export default SendMessage