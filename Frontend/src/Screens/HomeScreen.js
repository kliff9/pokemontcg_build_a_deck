import React from "react";
import { Link } from "react-router-dom";
import pic from "../img/ThreePokemonBirds.jpg";
import "./ScreenCSS/HomeScreen.css";
export default function HomeScreen() {
  return (
    <React.Fragment>
      <div>
        <div className="Home_container">
          <img src={pic} alt="Picture" className="threebirds" />
          <div className="middlediv">
            <h2>Build Your Own Deck Now</h2>
            <Link to="/mydecks">
              <button className="bn632-hover">Build</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
