import { useParams } from "react-router-dom";
import Navigation from "../component/Navigation";

function State() {
  const { state } = useParams();
  return (
    <div>
      <Navigation />
      <h1 style={{ fontSize: "6rem" }}>{state}</h1>
    </div>
  );
}

export default State;
