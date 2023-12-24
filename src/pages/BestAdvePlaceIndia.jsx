import AllState from "../component/AllState";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";
import PropTypes from "prop-types";

BestAdvePlaceIndia.propTypes = {
  mostloved: PropTypes.array,
};

function BestAdvePlaceIndia({ mostloved }) {
  return (
    <div>
      <Navigation pathURL={"../images"} />
      <AllState mostloved={mostloved} />
      <Footer />
    </div>
  );
}

export default BestAdvePlaceIndia;
