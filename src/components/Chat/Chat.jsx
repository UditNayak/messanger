import "./chat.css";
import avatar from "../../images/avatar.png";
import info from "../../images/info.png";


const Chat = () => {
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={avatar} alt="Avatar" />
          <div className="texts">
            <span>Karan</span>
            <p>Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan Lorem ipsan</p>
          </div>
        </div>
        <div className="icons">
          <img src={info} alt="Info" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <input type="text" placeholder="Type a message...." />
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
