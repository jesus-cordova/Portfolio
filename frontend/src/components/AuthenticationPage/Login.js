import React, { useState, useContext } from "react";
import "./Login.scss";
import CloseIcon from "@material-ui/icons/Close";
import { UserContext } from "../../Context/UserContext.js";
import axios from "axios";

const queryString = require("query-string");
function Login(props) {
  const [user, setUser] = useContext(UserContext);
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });
  const [res, setRes] = useState("");
  function handleChange(event) {
    const { name, value } = event.target;
    setRes("");
    setLoginUser((prev) => {
      if (name === "username") {
        return {
          username: value,
          password: prev.password,
        };
      } else {
        return {
          username: prev.username,
          password: value,
        };
      }
    });
  }

  function handleSubmit(event) {
    axios
      .post(
        "/login",
        queryString.stringify({
          username: loginUser.username,
          password: loginUser.password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setRes(response.data);

        if (response.data === "Accepted") {
          axios
            .get("/login", {
              params: {
                username: loginUser.username,
              },
            })
            .then((response1) => {
              setUser(response1.data);
            });
        }
      });

    event.preventDefault();
  }

  return (
    <div>
      <div className="authentication-page"></div>
      <button>
        ''
        <CloseIcon className="close-icon" fontSize="large" />
      </button>
      <div className="conatiner-login">
        <div className="heading">
          <h1>Welcome Back!</h1>
        </div>
        <div className="switch-container-login">
          <button
            className="signup-button"
            onClick={() => props.setToggledClicked(!props.toggleClicked)}
          >
            Sign Up
          </button>
          <button className="login-button">Log In</button>
        </div>

        {res === "Accepted" && props.setClose(!props.close)}

        <input
          className="input-username"
          name="username"
          value={loginUser.username}
          onChange={handleChange}
          type="text"
          placeholder="Username"
          style={{
            border:
              res === "No user founds with that username" &&
              loginUser.username.length > 0
                ? "2px solid red"
                : "none",
          }}
        />

        <input
          className="input-password"
          name="password"
          value={loginUser.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          style={{
            border:
              res === "No user founds with that username" ||
              (res === "Wrong Password" && loginUser.username.length > 0)
                ? "2px solid red"
                : "none",
          }}
        />

        <button
          className="button-register"
          disabled={
            loginUser.username.length && loginUser.password.length > 0
              ? false
              : true
          }
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
}
export default Login;
