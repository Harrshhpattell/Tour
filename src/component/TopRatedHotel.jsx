import "./css/topratedhotel.css";

const hotels = [
  {
    name: "Luxury Hotel 1",
    state: "Gujarat",
    image: "https://source.unsplash.com/350x500?hotel",
  },
  {
    name: "Beach Resort 2",
    state: "Goa",
    image: "https://source.unsplash.com/350x500?hotel",
  },
  {
    name: "City View Hotel 3",
    state: "Delhi",
    image: "https://source.unsplash.com/350x500?hotel",
  },
  {
    name: "Mountain Retreat 4",
    state: "Himachal Pradesh",
    image: "https://source.unsplash.com/350x500?hotel",
  },
  {
    name: "Luxury Hotel 1",
    state: "Gujarat",
    image: "https://source.unsplash.com/350x500?hotel",
  },
  {
    name: "Beach Resort 2",
    state: "Goa",
    image: "https://source.unsplash.com/350x500?hotel",
  },
  {
    name: "City View Hotel 3",
    state: "Delhi",
    image: "https://source.unsplash.com/350x500?hotel",
  },
  {
    name: "Mountain Retreat 4",
    state: "Himachal Pradesh",
    image: "https://source.unsplash.com/350x500?hotel",
  },
];

export default function TopRatedHotel() {
  return (
    <div className="TopRatedHotel">
      <div className="head-section">
        <div>
          <hr id="hr1" />
          <hr id="hr2" />
          <hr id="hr3" />
        </div>
        <div>
          <p>
            Pick the most over the top total and best accomodation
            recommandation that you need to make your vacation charming.
          </p>
        </div>
      </div>
      <div className="hotel">
        <h1>Top Rated Hotel</h1>
        <div className="hotelliist">
          {hotels.map((list, index) => (
            <div key={index} className="list-hotel">
              <img src={list.image} alt={list.name} />
              <div className="des">
                <div className="state">
                  <h3>{list.state}</h3>
                  <span>
                    <img
                      src="../images/icons/star1.png"
                      alt="star"
                      style={{ width: "2rem" }}
                    />
                    <img
                      src="../images/icons/star1.png"
                      alt="star"
                      style={{ width: "2rem" }}
                    />
                    <img
                      src="../images/icons/star1.png"
                      alt="star"
                      style={{ width: "2rem" }}
                    />
                    <img
                      src="../images/icons/star1.png"
                      alt="star"
                      style={{ width: "2rem" }}
                    />
                    <img
                      src="../images/icons/star1.png"
                      alt="star"
                      style={{ width: "2rem" }}
                    />
                  </span>
                </div>
                <p>{list.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
