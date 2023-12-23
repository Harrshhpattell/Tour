import "./css/allState.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

AllState.propTypes = {
  mostloved: PropTypes.array,
};

export default function AllState({ mostloved }) {
  return (
    <div className="allState">
      <h1>Best Adventure Place (India)</h1>
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
              <input type="radio" id="1000To5000" name="budget" /> 1000 To 5000
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
          {mostloved.map((list, index) => (
            <div key={index} className="list">
              <button className="rating-btn">X {list.rating}</button>
              <img src={list.image} alt={list.name} />
              <div className="des-sec">
                <h1>{list.name}</h1>
                <div>
                  <p className="starting">Starting From</p>
                  <p className="price">₹ {list.price}</p>
                  <p className="perPerson">Per Person</p>
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
  );
}
