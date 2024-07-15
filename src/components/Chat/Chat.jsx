import "./chat.css";
import { useRef, useEffect } from "react";
import avatar from "../../images/avatar.png";
import info from "../../images/info.png";
import { useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";

const Chat = () => {
  const [chat, setChat] = useState();

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }
  , []);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", "ZUeAPdEK6AeXOHitozIl"), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, []);

  console.log(chat);



  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={avatar} alt="Avatar" />
          <div className="texts">
            <span>Karan</span>
            <p>
              Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem
              ipsan Lorem ipsan
            </p>
          </div>
        </div>
        <div className="icons">
          <img src={info} alt="Info" />
        </div>
      </div>
      <div className="center">
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem
              ipsan Lorem ipsan
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src={avatar} alt="Avatar" />
          <div className="texts">
            <p>
              Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem
              ipsan Lorem ipsan
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem
              ipsan Lorem ipsan
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src={avatar} alt="Avatar" />
          <div className="texts">
            <p>
              Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem
              ipsan Lorem ipsan
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem
              ipsan Lorem ipsan
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src={avatar} alt="Avatar" />
          <div className="texts">
            <p>
              Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem
              ipsan Lorem ipsan
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem
              ipsan Lorem ipsan
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <input type="text" placeholder="Type a message...." />
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
