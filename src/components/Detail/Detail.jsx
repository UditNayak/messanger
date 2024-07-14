import "./detail.css";
import avatar from "../../images/avatar.png";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src={avatar} alt="Avatar"  />
        <h2>Udit</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="info">
        <button>Block User</button>
        <button>Log out</button>
      </div>
    </div>
  )
}

export default Detail