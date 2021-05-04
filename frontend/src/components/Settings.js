import React, { useContext } from "react";
import "./Settings.scss";
import { UserContext } from "../Context/UserContext.js";

function Settings() {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <div className="first-container">
        <h1>Account Settings:</h1>
        <div className="first-col">
          <div className="info-first-col">
            <label>FirstName: </label>
            <p>{user.firstName}</p>
          </div>
          <div>
            <label>Username: </label>
            <p>{user.username}</p>
          </div>
        </div>
        <div className="second-col">
          <div className="info-second-col">
            <label>LastName: </label>
            <p>{user.lastName}</p>
          </div>
          <label>Email-Address: </label>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
