import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import BestAdvePlaceIndia from "./pages/BestAdvePlaceIndia";

const mostloved = [
  {
    image: "https://source.unsplash.com/400x250?gujarat",
    name: "Gujarat",
    price: "2500",
    rating: "4.5",
  },
  {
    image: "https://source.unsplash.com/400x250?goa",
    name: "Goa",
    price: "5000",
    rating: "4.9",
  },
  {
    image: "https://source.unsplash.com/400x250?delhi",
    name: "Delhi",
    price: "3500",
    rating: "4.6",
  },
  {
    image: "https://source.unsplash.com/400x250?rajasthan",
    name: "Rajasthan",
    price: "10500",
    rating: "5.0",
  },
  {
    image: "https://source.unsplash.com/400x250?maharashtra",
    name: "Maharashtra",
    price: "5500",
    rating: "4.5",
  },
  {
    image: "https://source.unsplash.com/400x250?karnataka",
    name: "Karnataka",
    price: "12500",
    rating: "4.4",
  },
  {
    image: "https://source.unsplash.com/400x250?tamilnadu",
    name: "Tamil Nadu",
    price: "12500",
    rating: "4.3",
  },
  {
    image: "https://source.unsplash.com/400x250?kerala",
    name: "Kerala",
    price: "4900",
    rating: "4.2",
  },
  {
    image: "https://source.unsplash.com/400x250?uttarpradesh",
    name: "Uttar Pradesh",
    price: "4500",
    rating: "4.0",
  },
  {
    image: "https://source.unsplash.com/400x250?bihar",
    name: "Bihar",
    price: "3500",
    rating: "3.0",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage mostloved={mostloved} />} />
        <Route
          path="/best_adventure_places_india"
          element={<BestAdvePlaceIndia mostloved={mostloved} />}
        >
          {/* <Route path="" element={<City />} /> */}
        </Route>
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
