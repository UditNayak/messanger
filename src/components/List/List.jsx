import ChatList from "./ChatList";
import "./list.css";
import UserInfo from "./UserInfo";

const List = () => {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  )
}


export default List