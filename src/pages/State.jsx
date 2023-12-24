import { useParams } from "react-router-dom";
import Navigation from "../component/Navigation";
import StatePage from "../component/StatePage";
import Footer from "../component/Footer";
import PropTypes from "prop-types";

State.propTypes = {
  mostloved: PropTypes.array,
};

function State({ mostloved }) {
  const { state } = useParams();
  return (
    <div>
      <Navigation pathURL={"../../images"} />
      <StatePage state={state} mostloved={mostloved} />
      <Footer />
    </div>
  );
}

export default State;
