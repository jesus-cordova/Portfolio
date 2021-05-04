import React, { useState, useContext, useEffect } from "react";
import "./Navigation.scss";
import PersonIcon from "@material-ui/icons/Person";
import logo from "../images/logo.PNG";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { UserContext } from "../Context/UserContext.js";
import { HashLink as Link } from "react-router-hash-link";
import Authentication from "./AuthenticationPage/Authentication.js";

function Navigation() {
  const [user, setUser] = useContext(UserContext);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("user-list");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("user-list", JSON.stringify(user));
  });

  function handleClick(event) {
    setUser(() => {
      return {
        firstName: "",
      };
    });
  }

  return (
    <div className="header-section">
      <header>
        <div className="start">
          <Link to="/">
            <img className="logo" src={logo} alt="user-pic" />
          </Link>
        </div>
        <div className="middle">
          <ul className="nav-links">
            <li>
              <Link to="/#projects">
                <a href="#projects">Projects</a>
              </Link>
            </li>
            <li>
              <Link to="/Blog">
                <a href="#">Blogs</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="end">
          {user.firstName === "" ? (
            <button onClick={() => setClicked(!clicked)}>
              <PersonIcon className="icon" fontSize="large" />
            </button>
          ) : (
            [
              <div className="dropdown">
                <p>
                  {user.username}
                  <ArrowDropDownIcon className="drop-icon" />
                  <ArrowLeftIcon className="left-icon" />
                </p>
                <div className="dropdown-content">
                  <Link to="/Settings">
                    <a href="#">Settings</a>
                  </Link>
                  <Link to="/Comments">
                    <a href="#">Comments</a>
                  </Link>
                  <Link to="/">
                    <a href="#" onClick={handleClick}>
                      Signout
                    </a>
                  </Link>
                </div>
              </div>,
            ]
          )}
        </div>
      </header>
      {clicked && <Authentication isActive={clicked} setClicked={setClicked} />}
    </div>
  );
}

export default Navigation;
