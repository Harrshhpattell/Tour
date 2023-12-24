import "./css/statePage.css";
import PropTypes from "prop-types";

StatePage.propTypes = {
  state: PropTypes.string,
  mostloved: PropTypes.array,
};

export default function StatePage({ state, mostloved }) {
  const stateData = mostloved.find((item) => item.name.toLowerCase() === state);
  const startingPrice = stateData ? stateData.startingPrice : null;
  const places = stateData ? stateData.places : null;

  return (
    <div>
      <div className="state-header">
        <img
          src={`https://source.unsplash.com/1200x500?${state}`}
          alt={state}
        />
        <h1 style={{ fontSize: "6rem" }}>{state}</h1>
      </div>
      <div className="two-btn">
        <button>Best Place To Visit in</button>
        <button>
          Starting From{" "}
          <span>{startingPrice ? `₹ ${startingPrice}` : "N/A"}</span>
        </button>
      </div>
      <div className="places">
        {places.map((place, index) => (
          <div className="place" key={index}>
            <img src={place.image} alt={place.name} />
            <h1>{place.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
