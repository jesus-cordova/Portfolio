import React, { useEffect } from "react";
import "./MainPage.scss";

import FlipCard from "./FlipCard.js";
import AOS from "aos";
import "aos/dist/aos.css";

function MainPage() {
  return (
    <div>
      <div className="overall-info">
        <div className="info">
          <marquee scrollamount="50">GPA:3.5</marquee>
          <marquee scrollamount="70">Java</marquee>
          <marquee scrollamount="43">CSS</marquee>
          <marquee scrollamount="75">SQL</marquee>
          <marquee scrollamount="53">JavaScript</marquee>
          <marquee scrollamount="41">JSX</marquee>
          <marquee scrollamount="67">React</marquee>
          <marquee scrollamount="58">Linux</marquee>
          <marquee scrollamount="72">HTML</marquee>
          <marquee scrollamount="59">slow</marquee>
          <marquee scrollamount="75">Python</marquee>
          <marquee scrollamount="48">Adaptive</marquee>
          <marquee scrollamount="64">Acountable</marquee>
          <marquee scrollamount="45">Punctual</marquee>
          <marquee scrollamount="78">Team Player</marquee>
          <marquee scrollamount="63">Communication Skills</marquee>
          <marquee scrollamount="44">Creative</marquee>

          <img
            className="info-pic"
            src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
            alt="user-pic"
          />
        </div>
        <div className="bio">
          <h1>Jesus Cordova</h1>
          <p>
            Know enough about a subject to think you are right... but not enough
            about the subject to know you are wrong.
          </p>
        </div>
      </div>
      <div id="projects" className="project-section">
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
      </div>
      <div className="footer">
        <h1>Contact Me</h1>
        <p>Email: jjcorodvajj@gmail.com</p>

        <p>Phone: 801-979-8724</p>
      </div>
    </div>
  );
}

export default MainPage;
