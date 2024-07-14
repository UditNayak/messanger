import "./login.css";
import defaultAvatar from "../../images/defaultAvatar.jpg";  
import { toast } from "react-toastify";

const Login = () => {


  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Logged in successfully");
  };


  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Sign in</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form>
          <img src={defaultAvatar} alt="Profile Avatar" />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
