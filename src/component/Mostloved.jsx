import "./css/lookingfor.css";
import PropTypes from "prop-types";

Mostloved.propTypes = {
  mostloved: PropTypes.array,
};

export default function Mostloved({ mostloved }) {
  return (
    <div className="Lookingfor">
      <h1>Most Loved Destination!</h1>
      <div className="lists">
        {mostloved.map((item, index) => (
          <div key={index} className="list-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
