import "./css/statePage.css";
import PropTypes from "prop-types";

StatePage.propTypes = {
  state: PropTypes.string,
};

export default function StatePage({ state }) {
  return (
    <div>
      <div className="state-header">
        <img
          src={`https://source.unsplash.com/1200x500?${state}`}
          alt={state}
        />
        <h1 style={{ fontSize: "6rem" }}>{state}</h1>
      </div>
    </div>
  );
}
