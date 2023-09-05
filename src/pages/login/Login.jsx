import { Link } from "react-router-dom";
import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../hooks/ApiCalls";
import { AuthContext } from "../../context/AuthContext";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);
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
            <button className="loginButton">
              {isFetching ? (
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#fff"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              ) : (
                "Login"
              )}
            </button>
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
