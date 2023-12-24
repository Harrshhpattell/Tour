import "./css/statePage.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ScrollTop from "../ScrollTop";

StatePage.propTypes = {
  state: PropTypes.string,
  mostloved: PropTypes.array,
};

export default function StatePage({ state, mostloved }) {
  const stateData = mostloved.find((item) => item.name.toLowerCase() === state);
  const startingPrice = stateData ? stateData.startingPrice : null;
  const places = stateData ? stateData.places : null;

  return (
    <div>
      <ScrollTop state={state} />
      <div className="state-header">
        <img
          src={`https://source.unsplash.com/1200x500?${state}`}
          alt={state}
        />
        <h1 style={{ fontSize: "6rem" }}>{state}</h1>
      </div>
      <div className="two-btn">
        <button>Best Place To Visit in</button>
        <button>
          Starting From{" "}
          <span>{startingPrice ? `₹ ${startingPrice}` : "N/A"}</span>
        </button>
      </div>
      <div className="places">
        {places.map((place, index) => (
          <div className="place" key={index}>
            <img src={place.image} alt={place.name} />
            <h1>{place.name}</h1>
          </div>
        ))}
      </div>

      <div className="statePage">
        <h1>Top Trending Package</h1>
        <div className="container">
          <div className="filter-section">
            <div className="filter-heading">
              <h1>Filter</h1>
              <button>Clear</button>
            </div>

            <div className="sortby">
              <h3>Sort By:</h3>
              <label htmlFor="budgetHighToLow">
                <input type="radio" id="budgetLow" name="budgetRange" /> High to
                Low
              </label>
              <label htmlFor="budgetLowToHigh">
                <input type="radio" id="budgetHigh" name="budgetRange" /> Low to
                High
              </label>
            </div>

            <div className="search">
              <h3>Search:</h3>
              <input type="text" id="search" placeholder="Enter keywords" />
            </div>

            <div className="destination">
              <h3>By Destination:</h3>
              <label htmlFor="india">
                <input type="radio" id="india" name="destination" /> India
              </label>
              <label htmlFor="internantional">
                <input type="radio" id="internantional" name="destination" />{" "}
                Internantional
              </label>
            </div>

            <div className="dayWiseFilter">
              <h3>Filter by Days:</h3>
              <select id="days">
                <option value="1">1 Day</option>
                <option value="3">3 Days</option>
                <option value="7">7 Days</option>
              </select>
            </div>

            <div className="filterByPerPerson">
              <h3>Filter by Budget per Person:</h3>
              <label htmlFor="lessThan1000">
                <input type="radio" id="lessThan1000" name="budget" /> Less Than
                1000
              </label>
              <label htmlFor="1000To5000">
                <input type="radio" id="1000To5000" name="budget" /> 1000 To
                5000
              </label>
              <label htmlFor="5000To10000">
                <input type="radio" id="5000To10000" name="budget" /> 5000 To
                10000
              </label>
            </div>

            <div className="filterByMonth">
              <h3>Filter by Month:</h3>
              <select id="month">
                <option value="january">January</option>
                <option value="february">February</option>
              </select>
            </div>
          </div>

          <div className="state-list">
            {stateData.packages.map((list, index) => (
              <div key={index} className="list">
                <button className="rating-btn">
                  <span>
                    <img
                      src="../images/icons/star.png"
                      alt="star"
                      style={{ width: "1.5rem" }}
                    />
                  </span>
                  {list.rating}
                </button>

                <img src={list.image} alt={list.name} />
                <div className="des-sec">
                  <h1>{list.name}</h1>
                  <div>
                    <p className="price">₹ {list.price}</p>
                    <p className="perPerson">Per Person</p>
                  </div>
                </div>
                <div className="include">
                  <h3>Travel Include: {list.duration}</h3>
                  <div>
                    <div>
                      {list.includes.map((include, index) => (
                        <div className="includeList" key={index}>
                          <div className="includeItem">
                            <img
                              src="../images/icons/hotel.png"
                              style={{ width: "4rem" }}
                              alt={list.name}
                            />
                            <h3>{include.hotel}</h3>
                          </div>
                          <div className="includeItem">
                            <img
                              src="../images/icons/food.png"
                              style={{ width: "4rem" }}
                              alt={list.name}
                            />
                            <h3>{include.meals}</h3>
                          </div>
                          <div className="includeItem">
                            <img
                              src="../images/icons/sightseeing.png"
                              style={{ width: "4rem" }}
                              alt={list.name}
                            />
                            <h3>{include.sightseeing}</h3>
                          </div>
                          <div className="includeItem">
                            <img
                              src="../images/icons/public-transport.png"
                              style={{ width: "4rem" }}
                              alt={list.name}
                            />
                            <h3>{include.transport}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link to={list.name.toLowerCase()}>
                  <button className="more-btn">More Detail</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
