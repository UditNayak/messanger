import React, { useState } from "react";
import "./chatList.css";
import AddUser from "./AddUser";
import search from "../../../images/search.png";
import plus from "../../../images/plus.png";
import minus from "../../../images/minus.png";
import avatar from "../../../images/avatar.png";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src={search} alt="Search" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? minus : plus}
          alt="Plus"
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src={avatar} alt="Avatar" />
        <div className="texts">
          <span>Your Self</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="Avatar" />
        <div className="texts">
          <span>Your Self</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="Avatar" />
        <div className="texts">
          <span>Your Self</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="Avatar" />
        <div className="texts">
          <span>Your Self</span>
          <p>Hello</p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
