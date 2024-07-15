import "./chat.css";
import { useRef, useEffect, useState } from "react";
import defaultAvatar from "../../images/defaultAvatar.jpg";
import info from "../../images/info.png";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import { format } from "timeago.js";

const Chat = () => {
  const [chat, setChat] = useState({ messages: [] });  // Initialize with an empty messages array
  const [text, setText] = useState("");

  const { currentUser } = useUserStore();
  const { chatId, user } = useChatStore();

  const endRef = useRef(null);

  useEffect(() => {
    if (chat.messages.length) {  // Check if there are messages before scrolling
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat.messages]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data() ?? { messages: [] });  // Handle possible undefined data
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  const handleSend = async () => {
    if (text === "") return;
  
    try {
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
        }),
      });
  
      const userIDs = [currentUser.id, user.id];
  
      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);
  
        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();
  
          const chatIndex = userChatsData.chats.findIndex(
            (c) => c.chatId === chatId
          );
  
          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();
  
          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });
    } catch (err) {
      console.log(err);
    } finally {
      setText("");
    }
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={defaultAvatar} alt="Avatar" />
          <div className="texts">
            <span>{user?.username}</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src={info} alt="Info" />
        </div>
      </div>
      <div className="center">
        {chat.messages.map((message) => (  // Use optional chaining here if needed
          <div
            className={
              message.senderId === currentUser?.id ? "message own" : "message"
            }
            key={message?.createdAt?.seconds}  // Assuming createdAt is a Firebase timestamp
          >
            <div className="texts">
              {<img src={defaultAvatar} alt="" />}
              <p>{message.text}</p>
              <span>{format(message.createdAt.toDate())}</span>
            </div>
          </div>
        ))}
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <input type="text" placeholder="Type a message...." value={text} onChange={(e) => setText(e.target.value)} />
        <button className="sendButton" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
