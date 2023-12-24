import Navigation from "../component/Navigation";
import PackageDetail from "../component/PackageDetail";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "../component/Footer";

Details.propTypes = {
  mostloved: PropTypes.array,
};

function Details({ mostloved }) {
  const { state, package: packageName } = useParams();
  return (
    <div>
      <Navigation pathURL={"../../../images"} />
      <PackageDetail
        state={state}
        packageName={packageName}
        mostloved={mostloved}
      />
      <Footer />
    </div>
  );
}

export default Details;
