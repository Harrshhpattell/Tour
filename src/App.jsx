import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import BestAdvePlaceIndia from "./pages/BestAdvePlaceIndia";
import { useState } from "react";
import State from "./pages/State";

const mostloved = [
  {
    image: "https://source.unsplash.com/400x250?gujarat",
    name: "Gujarat",
    startingPrice: "2500",
    rating: "4.5",
  },
  {
    image: "https://source.unsplash.com/400x250?goa",
    name: "Goa",
    startingPrice: "5000",
    rating: "4.9",
  },
  {
    image: "https://source.unsplash.com/400x250?delhi",
    name: "Delhi",
    startingPrice: "3500",
    rating: "4.6",
    places: [
      {
        name: "Fatehpuri Masjid",
        description: "A historical mosque in Delhi.",
      },
      {
        name: "Qutub Minar",
        description:
          "A UNESCO World Heritage Site and one of the tallest minarets in India.",
      },
      {
        name: "Raj Ghat",
        description: "A memorial dedicated to Mahatma Gandhi.",
      },
    ],
    packages: [
      {
        name: "Romantic Golden Sky Holiday Package",
        description:
          "Experience the charm of Delhi with this romantic getaway.",
        price: "$999",
        duration: "5 Days 4 Nights",
        includes: "Upto 3-star hotel, meals, sightseeing, flight",
      },
      {
        name: "A Delightful Trip to Delhi",
        description:
          "Explore the beauty of Delhi in this short and delightful trip.",
        price: "$6499",
        duration: "3 Days 2 Nights",
        includes: "Upto 3-star hotel, meals, sightseeing, train",
      },
      {
        name: "North India Golden Triangle Package",
        description: "Discover the wonders of North India's golden triangle.",
        price: "$12500",
        duration: "4 Days 3 Nights",
        includes: "Upto 3-star hotel, meals, sightseeing, train",
      },
    ],
  },
  {
    image: "https://source.unsplash.com/400x250?rajasthan",
    name: "Rajasthan",
    startingPrice: "10500",
    rating: "5.0",
    places: [
      {
        name: "Jaipur",
        description: "The Pink City known for its beautiful palaces and forts.",
      },
      {
        name: "Udaipur",
        description: "The City of Lakes, famous for its romantic setting.",
      },
      {
        name: "Jodhpur",
        description: "The Blue City with majestic forts and palaces.",
      },
    ],
    packages: [
      {
        name: "Royal Rajasthan Experience",
        description: "Immerse yourself in the royal culture of Rajasthan.",
        price: "$8999",
        duration: "6 Days 5 Nights",
        includes: "Luxury hotel, meals, guided tours, transportation",
      },
      {
        name: "Desert Safari Adventure",
        description: "Explore the Thar Desert with this thrilling adventure.",
        price: "$7499",
        duration: "4 Days 3 Nights",
        includes: "Desert camp stay, camel safari, cultural performances",
      },
    ],
  },
  {
    image: "https://source.unsplash.com/400x250?maharashtra",
    name: "Maharashtra",
    startingPrice: "5500",
    rating: "4.5",
  },
  {
    image: "https://source.unsplash.com/400x250?karnataka",
    name: "Karnataka",
    startingPrice: "12500",
    rating: "4.4",
  },
  {
    image: "https://source.unsplash.com/400x250?tamilnadu",
    name: "Tamil Nadu",
    startingPrice: "12500",
    rating: "4.3",
  },
  {
    image: "https://source.unsplash.com/400x250?kerala",
    name: "Kerala",
    startingPrice: "4900",
    rating: "4.2",
  },
  {
    image: "https://source.unsplash.com/400x250?uttarpradesh",
    name: "Uttar Pradesh",
    startingPrice: "4500",
    rating: "4.0",
  },
  {
    image: "https://source.unsplash.com/400x250?bihar",
    name: "Bihar",
    startingPrice: "3500",
    rating: "3.0",
  },
];

function App() {
  const [state, setState] = useState("");
  console.log(state);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage mostloved={mostloved} />} />
        <Route
          path="/best_adventure_places_india"
          element={<BestAdvePlaceIndia mostloved={mostloved} />}
        />
        <Route
          path="/best_adventure_places_india/:state"
          element={<State setState={setState} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function PageNotFound() {
  return (
    <div>
      <h1 style={{ fontSize: "10rem" }}>page not found</h1>
    </div>
  );
}
