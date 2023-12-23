import { Link } from "react-router-dom";
import "./css/herosection.css";
import { useState } from "react";

export default function Herosection() {
  const [destination, setDestination] = useState("");
  console.log(destination);

  return (
    <div className="hero">
      <div className="head-sec">
        <h2>Choose your next level</h2>
        <h2>
          <span>Destination</span> as per your comfort!
        </h2>
        <h4>WITH CUSTOMIZED PACKAGES</h4>
        <Link to="/best_adventure_places_india">
          <button>Best Adventure Place</button>
        </Link>
      </div>
      <div className="filter-sec">
        <select
          className="filter-box des"
          id="destination"
          name="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="">Select Destination</option>
          <option value="delhi">Delhi</option>
          <option value="gujarat">Gujarat</option>
          <option value="rajasthan">Rajasthan</option>
          <option value="maharashtra">Maharashtra</option>
          <option value="kerala">Kerala</option>
        </select>
        <div className="filter-box">
          <input type="time" id="time" name="time" />
        </div>
        <select className="filter-box" id="destination" name="destination">
          <option value="">Select Month</option>
          <option value="jan">jan</option>
          <option value="feb">feb</option>
        </select>
        <div className="filter-box expl">
          <Link to={`/best_adventure_places_india/${destination}`}>
            <button id="explore-btn">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
