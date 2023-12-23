import Navigation from "../component/Navigation";
import Herosection from "../component/Herosection";

function Homepage() {
  return (
    <div>
      <Navigation />
      <Herosection />
      <Lookingfor />
    </div>
  );
}

function Lookingfor() {
  return (
    <div className="Lookingfor">
      <h1>Are You Looking For?</h1>
    </div>
  );
}

export default Homepage;
