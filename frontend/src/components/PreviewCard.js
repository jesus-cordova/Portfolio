import React from "react";
import "./PreviewCard.scss";
import natureImage from "../images/nature.jpg";
import { Link } from "react-router-dom";
function PreviewCard(props) {
  return (
    <div className="card">
      <Link
        to={{ pathname: `/Article/${props.id}`, data: props.id }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img className="preview-image" src={natureImage} alt="user-pic" />
        <h3 className="preview-title">{props.title}</h3>
        <div className="first-section">
          <p className="subject">Subject: {props.subject}</p>

          <p className="datestamp">{props.date}</p>
        </div>
        <hr></hr>
        <p className="author">By: {props.author}</p>
      </Link>
    </div>
  );
}

export default PreviewCard;
