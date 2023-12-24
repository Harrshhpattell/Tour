import "./css/packageDetail.css";
import PropTypes from "prop-types";

PackageDetail.propTypes = {
  state: PropTypes.string,
  packageName: PropTypes.string,
  mostloved: PropTypes.array,
};

function PackageDetail({ state, packageName, mostloved }) {
  const stateData = mostloved.find((item) => item.name.toLowerCase() === state);
  const packages = stateData ? stateData.packages : null;
  const travelPackage = packages
    ? packages.find((list) => list.name.toLowerCase() === packageName)
    : null;

  console.log(state);
  console.log(packageName);

  return (
    <div className="details">
      {/* ------------------------------leftside-------- */}
      <div className="detailLeft">
        <div className="img-header">
          <img
            src={`https://source.unsplash.com/1000x500?${state}`}
            alt="photo"
          />
        </div>
        <div className="cate-bar">
          <button>Overview</button>
          <button>Services</button>
          <button>Itinerary</button>
          <button>Hotels</button>
          <button>Policy</button>
        </div>

        <div className="cate-overview">
          <div className="service-overview-heading">
            <h1>Overview</h1>
          </div>
          <div className="service-overview-des">
            <p>{travelPackage.description}</p>
          </div>
        </div>

        <div className="cate-services">
          <div className="service-services-heading">
            <h1>Services</h1>
          </div>
          <div className="service-services-des">
            <div className="includes">
              <h2>Includes</h2>
              <div className="lists">
                {travelPackage.includes.map((lists, index) => (
                  <div key={index}>
                    <p>👉 Hotel : {lists.hotel}</p>
                    <p>👉 {lists.meals}</p>
                    <p>👉 {lists.sightseeing}</p>
                    <p>👉 Transportations : {lists.transport}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="exclude">
              <h2>Excludes</h2>
              <div className="lists">
                <p>❌ 2 Hour spa Session</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------rightside-------------- */}
      <div className="detailRight">
        <div className="card">
          <h1>{travelPackage.name}</h1>

          <div className="packageDes">
            <div className="packageState">
              <h1>{state}</h1>
              <p>{travelPackage.duration}</p>
            </div>
            <div className="packagePrice">
              <p>
                <span>₹{travelPackage.price}</span> per person
              </p>
              <p>(*Excluding applicable taxes)</p>
            </div>
          </div>

          <div className="includes">
            {travelPackage.includes.map((list, index) => (
              <div key={index} className="include">
                <div>
                  <img
                    src="/images/icons/hotel.png"
                    style={{ width: "5rem" }}
                    alt="hotel"
                  />
                  <h3>{list.hotel}</h3>
                </div>
                <div>
                  <img
                    src="/images/icons/food.png"
                    style={{ width: "5rem" }}
                    alt="meals"
                  />
                  <h3>{list.meals}</h3>
                </div>
                <div>
                  <img
                    src="/images/icons/sightseeing.png"
                    style={{ width: "5rem" }}
                    alt="sightseeing"
                  />
                  <h3>{list.sightseeing}</h3>
                </div>
                <div>
                  <img
                    src="/images/icons/public-transport.png"
                    style={{ width: "5rem" }}
                    alt="transport"
                  />
                  <h3>{list.transport}</h3>
                </div>
              </div>
            ))}
          </div>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default PackageDetail;
