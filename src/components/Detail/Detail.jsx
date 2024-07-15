import "./detail.css";
import { auth } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import avatar from "../../images/avatar.png";

const Detail = () => {

  const { currentUser } = useUserStore();

  const handleLogout = () => {
    auth.signOut();
    // resetChat()
  };

  return (
    <div className="detail">
      <div className="user">
        <img src={avatar} alt="Avatar" />
        <h2>{currentUser?.username}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <button>Block User</button>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
