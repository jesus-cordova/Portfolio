import React from "react";
import "./FlipCard.scss";

function FlipCard() {
  return (
    <div className="cards">
      <div className="cards-side cards-side-front">
        <img src="https://www.kiragames.com/images/kiragames/ubm_full_300x200.png" />
      </div>
      <div className="cards-side cards-side-back">
        <h1>BarberShop</h1>
        <hr></hr>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. minim veniam, quis nostrud exercitation ullamco laboris nisi
          pariatur. minim veniam, quis nostrud exercitation ullamco laboris nisi
        </p>

        <button>Take me</button>
      </div>
    </div>
  );
}

export default FlipCard;
