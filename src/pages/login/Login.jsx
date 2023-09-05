import { Link } from "react-router-dom";
import "./login.css";
import { useRef } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    console.log("click");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight" onSubmit={handleClick}>
          <form className="loginBox">
            <input
              required
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
            />
            <input
              required
              placeholder="Password"
              type="password"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>

            <button className="loginRegisterButton">
              <Link to="/register">
                <p>Create a New Account</p>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
