import "./css/lookingfor.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Mostloved.propTypes = {
  mostloved: PropTypes.array,
};

export default function Mostloved({ mostloved }) {
  return (
    <div className="Lookingfor">
      <h1>Most Loved Destination!</h1>
      <div className="lists">
        {mostloved.map((item, index) => (
          <Link
            to={`/Tour/best_adventure_places_india/${item.name.toLowerCase()}`}
            key={index}
            className="list-item"
          >
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
      <div className="btn-viewMore">
        <Link to="best_adventure_places_india">
          <button>All state</button>
        </Link>
      </div>
    </div>
  );
}
