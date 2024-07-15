import "./userInfo.css";
import { useUserStore } from "../../../lib/userStore";
import defaultAvatar from "../../../images/defaultAvatar.jpg";
import more from '../../../images/more.png';
import edit from '../../../images/edit.png';

const UserInfo = () => {

  const { currentUser } = useUserStore();


  return (
    <div className="userInfo">
      <div className="user">
      <img src={currentUser.avatar || defaultAvatar} alt="defaultAvatar" />
      <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src={more} alt="More" />
        <img src={edit} alt="Edit" />
      </div>
    </div>
  )
}

export default UserInfo;