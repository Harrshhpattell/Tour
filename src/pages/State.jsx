import { useParams } from "react-router-dom";
import Navigation from "../component/Navigation";
import StatePage from "../component/StatePage";
import PropTypes from "prop-types";

State.propTypes = {
  mostloved: PropTypes.array,
};

function State({ mostloved }) {
  const { state } = useParams();
  return (
    <div>
      <Navigation />
      <StatePage state={state} mostloved={mostloved} />
    </div>
  );
}

export default State;
