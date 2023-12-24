import "./css/navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src="/images/icons/airplane-around-earth.png" alt="logo" />
        <h1>Start Your Tour</h1>
      </Link>

      <div className="info">
        <ul>
          <li>
            <img src="/images/icons/phone-call.png" alt="call" /> +91 99999
            99999
          </li>
          <li>
            <img src="/images/icons/phone-call.png" alt="call" /> Travel Agent?
            Join Us
          </li>
          <li>
            <img src="/images/icons/gift.png" alt="offer" /> Offer
          </li>
          <li>
            <img src="/images/icons/download.png" alt="app" /> Download App
          </li>
        </ul>
      </div>
      <div className="profile">
        <button>
          <img src="/images/icons/user.png" alt="app" /> Harsh Patel
        </button>
      </div>
    </nav>
  );
}
