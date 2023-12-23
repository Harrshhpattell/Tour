import { useParams } from "react-router-dom";
import Navigation from "../component/Navigation";
import StatePage from "../component/StatePage";

function State() {
  const { state } = useParams();
  return (
    <div>
      <Navigation />
      <StatePage state={state} />
    </div>
  );
}

export default State;
