import "./addUser.css";
import defaultAvatar from "../../../../images/defaultAvatar.jpg";

const AddUser = () => {
  return (
    <div className="addUser">
      <form>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src={defaultAvatar} alt="avatar" />
          <span>Udit Kumar</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;