import React, { useState } from "react";
import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { toast } from "react-toastify";
import siteLogo from "../../assets/signin/sitelogo.png";

export default function signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // controlling inputs

  const [userMail, setUserMail] = useState("");
  const [password, setPassword] = useState("");

  const [showassword, setshowpassword] = useState(false);
  const [focusname, setfocusname] = useState(false);
  const [focusmail, setfocusmail] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  function handleSignIn() {
    const userData = {
      user: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        profilePic: "https://m.media-amazon.com/images/I/51T6MpbpQLL.jpg",
        jobRole: "Project manager",
        mobile: "98897887676",
      },
    };
    dispatch(login(userData));
    toast.success("Signed in successfully!");
    navigate("/");
  }

  return (
    <div>
      <form className="signin-page">
        <div className="signin-img">
          <img src={siteLogo} />
        </div>
        <div className="signin-form">
          <div className="signin-cointained">
            <div className="welcome">Welcome to ERP</div>
            <p>Sign in to cointinue</p>
            <div
              className={`username-cointainer ${
                focusname ? "user-border" : " "
              }`}
            >
              <svg
                className="user-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
              </svg>
              <input
                type="email"
                onFocus={() => setfocusname(true)}
                onBlur={() => setfocusname(false)}
                className="username"
                placeholder="E-mail Id"
                required
                value={userMail}
                onChange={(e) => {
                  setUserMail(e.target.value);
                }}
              />
            </div>
            <div
              className={`password-cointainer ${
                focusmail ? "mail-border" : ""
              }`}
            >
              <svg
                className="lock-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
              </svg>
              <input
                type={showassword ? "text" : "password"}
                onFocus={() => setfocusmail(true)}
                onBlur={() => setfocusmail(false)}
                className="password"
                placeholder="Password"
                required
                minLength="8"
                // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {showPassword ? (
                <svg
                  className="openeye-logo"
                  onClick={() => {
                    setShowPassword(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>
              ) : (
                <svg
                  className="closeeye-logo"
                  onClick={() => {
                    setShowPassword(true);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                </svg>
              )}
            </div>
            <div className="tearms-cointainer">
              <input type="checkbox" id="terms" required />
              <label form="terms" className="agree">
                I agree with{" "}
                <a href="#" target="_blank">
                  Terms & Conditions
                </a>
              </label>
            </div>
            <button onClick={handleSignIn} className="login-button">
              Log In
            </button>
            <p className="changer-link">
              Don't have an account?{" "}
              <Link to={"/sign-up"} className="link">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
