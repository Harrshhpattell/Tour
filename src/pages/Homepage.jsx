import Navigation from "../component/Navigation";
import Herosection from "../component/Herosection";
import Lookingfor from "../component/Lookingfor";
import Mostloved from "../component/Mostloved";
import Safety from "../component/Safety";
import TopRatedHotel from "../component/TopRatedHotel";
import Service from "../component/Service";
import Footer from "../component/Footer";
import PropTypes from "prop-types";

Homepage.propTypes = {
  mostloved: PropTypes.array,
};

function Homepage({ mostloved }) {
  return (
    <div>
      <Navigation />
      <Herosection mostloved={mostloved} />
      <Lookingfor />
      <Mostloved mostloved={mostloved} />
      <Safety />
      <TopRatedHotel />
      <Service />
      <Footer />
    </div>
  );
}

export default Homepage;
