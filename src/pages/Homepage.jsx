import Navigation from "../component/Navigation";
import Herosection from "../component/Herosection";
import Lookingfor from "../component/Lookingfor";
import Mostloved from "../component/Mostloved";
import Safety from "../component/Safety";
import TopRatedHotel from "../component/TopRatedHotel";
import Service from "../component/Service";
import Footer from "../component/Footer";

function Homepage() {
  return (
    <div>
      <Navigation />
      <Herosection />
      <Lookingfor />
      <Mostloved />
      <Safety />
      <TopRatedHotel />
      <Service />
      <Footer />
    </div>
  );
}

export default Homepage;
