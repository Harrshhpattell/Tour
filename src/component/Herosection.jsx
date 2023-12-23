import "./css/herosection.css";

export default function Herosection() {
  return (
    <div className="hero">
      <div className="head-sec">
        <h2>Choose your next level</h2>
        <h2>
          <span>Destination</span> as per your comfort!
        </h2>
        <h4>WITH CUSTOMIZED PACKAGES</h4>
        <button>Best Adventure Place</button>
      </div>
      <div className="filter-sec">
        <select className="filter-box des" id="destination" name="destination">
          <option value="">Select Destination</option>
          <option value="delhi">Delhi</option>
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
          <button id="explore-btn">Explore</button>
        </div>
      </div>
    </div>
  );
}
