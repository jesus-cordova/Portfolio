import React, { useState } from "react";
import "./Authentication.scss";
import Login from "./Login.js";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

const queryString = require("query-string");

function Authentication(props) {
  const [toggleClicked, setToggledClicked] = useState(true);
  const [loginUser, setLoginUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setLoginUser((prev) => {
      switch (name) {
        case "firstName":
          return {
            firstName: value,
            lastName: prev.lastName,
            username: prev.username,
            email: prev.email,
            password: prev.password,
            confirmPassword: prev.confirmPassword,
          };
        case "lastName":
          return {
            firstName: prev.firstName,
            lastName: value,
            username: prev.username,
            email: prev.email,
            password: prev.password,
            confirmPassword: prev.confirmPassword,
          };
        case "username":
          return {
            firstName: prev.firstName,
            lastName: prev.lastName,
            username: value,
            email: prev.email,
            password: prev.password,
            confirmPassword: prev.confirmPassword,
          };
        case "email":
          return {
            firstName: prev.firstName,
            lastName: prev.lastName,
            username: prev.username,
            email: value,
            password: prev.password,
            confirmPassword: prev.confirmPassword,
          };
        case "password":
          return {
            firstName: prev.firstName,
            lastName: prev.lastName,
            username: prev.username,
            email: prev.email,
            password: value,
            confirmPassword: prev.confirmPassword,
          };
        case "confirmPassword":
          return {
            firstName: prev.firstName,
            lastName: prev.lastName,
            username: prev.username,
            email: prev.email,
            password: prev.password,
            confirmPassword: value,
          };
      }
    });
  }

  function handleRegister(event) {
    setToggledClicked(!toggleClicked);
    axios
      .post(
        "/register",
        queryString.stringify({
          firstName: loginUser.firstName,
          lastName: loginUser.lastName,
          username: loginUser.username,
          email: loginUser.email,
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
      });

    event.preventDefault();
  }
  return (
    <div>
      {!toggleClicked && (
        <Login
          toggleClicked={toggleClicked}
          setToggledClicked={setToggledClicked}
          close={props.isActive}
          setClose={props.setClicked}
        />
      )}
      <div className="authentication-page"></div>
      <button onClick={() => props.setClicked(!props.isActive)}>
        <CloseIcon className="close-icon" fontSize="large" />
      </button>

      <div
        className="conatiner-authentication"
        style={{ display: toggleClicked ? "block" : "none" }}
      >
        <div className="heading">
          <h1>
            Welcome<br></br>
            {loginUser.firstName}
          </h1>
        </div>
        <div className="switch-container">
          <button className="signup-button">Sign Up</button>
          <button
            className="login-button"
            onClick={() => setToggledClicked(!toggleClicked)}
          >
            Log In
          </button>
        </div>

        <input
          className="input-fName"
          onChange={handleChange}
          name="firstName"
          type="text"
          value={loginUser.firstName}
          placeholder="First Name"
        />

        <input
          className="input-lName"
          type="text"
          name="lastName"
          onChange={handleChange}
          value={loginUser.lastName}
          placeholder="Last Name"
        />
        <input
          className="input-username"
          name="username"
          onChange={handleChange}
          value={loginUser.username}
          type="text"
          placeholder="Username"
        />
        <input
          className="input-email"
          name="email"
          onChange={handleChange}
          value={loginUser.email}
          type="email"
          placeholder="Email"
        />
        <input
          className="input-password"
          name="password"
          onChange={handleChange}
          value={loginUser.password}
          type="password"
          placeholder="Password"
        />
        <input
          name="confirmPassword"
          onChange={handleChange}
          value={loginUser.confirmPassword}
          className="input-confirm-password"
          type="password"
          placeholder="Confirm Password"
          style={{
            border:
              loginUser.password !== loginUser.confirmPassword &&
              "2px solid red",
          }}
        />
        <button
          className="button-register"
          disabled={
            loginUser.firstName.length &&
            loginUser.lastName.length &&
            loginUser.username.length &&
            loginUser.email.length &&
            loginUser.password.length &&
            loginUser.confirmPassword.length > 0 &&
            loginUser.password === loginUser.confirmPassword
              ? false
              : true
          }
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Authentication;
