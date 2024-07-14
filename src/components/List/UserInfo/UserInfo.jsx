import "./userInfo.css";
import avatar from '../../../images/avatar.png';
import more from '../../../images/more.png';
import video from '../../../images/video.png';
import edit from '../../../images/edit.png';

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <img src={avatar} alt="Avatar"  />
        <h2>Udit</h2>
      </div>
      <div className="icons">
        <img src={more} alt="More" />
        <img src={video} alt="Video" />
        <img src={edit} alt="Edit" />
      </div>
    </div>
  )
}

export default UserInfo;