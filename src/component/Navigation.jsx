import "./css/navigation.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Navigation.propTypes = {
  pathURL: PropTypes.string,
};

export default function Navigation({ pathURL }) {
  return (
    <nav className="nav">
      <Link to="/Tour" className="logo">
        <img src={`${pathURL}/icons/airplane-around-earth.png`} alt="logo" />
        <h1>Start Your Tour</h1>
      </Link>

      <div className="info">
        <ul>
          <li>
            <img src={`${pathURL}/icons/phone-call.png`} /> +91 99999 99999
          </li>
          <li>
            <img src={`${pathURL}/icons/phone-call.png`} /> Travel Agent? Join
            Us
          </li>
          <li>
            <img src={`${pathURL}/icons/gift.png`} /> Offer
          </li>
          <li>
            <img src={`${pathURL}/icons/download.png`} alt="app" /> Download App
          </li>
        </ul>
      </div>
      <div className="profile">
        <button>
          <img src={`${pathURL}/icons/user.png`} alt="app" /> Harsh Patel
        </button>
      </div>
    </nav>
  );
}
