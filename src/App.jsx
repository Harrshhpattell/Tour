import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import BestAdvePlaceIndia from "./pages/BestAdvePlaceIndia";
// import { useState } from "react";
import State from "./pages/State";
import ScrollTop from "./ScrollTop";
import Details from "./pages/Details";

const mostloved = [
  {
    image: "https://source.unsplash.com/400x250?gujarat",
    name: "gujarat",
    startingPrice: "2500",
    rating: "4.5",
    places: [
      {
        name: "Sabarmati Ashram",
        image: "https://source.unsplash.com/400x250?Mahatma",
        description: "A place closely associated with Mahatma Gandhi.",
      },
      {
        name: "Gir National Park",
        image: "https://source.unsplash.com/400x250?lion",
        description: "Home to Asiatic lions and diverse wildlife.",
      },
      {
        name: "Rann of Kutch",
        image: "https://source.unsplash.com/400x250?kutch",
        description: "A vast salt marsh known for its white desert landscape.",
      },
    ],
    packages: [
      {
        name: "Gujarat Heritage Tour",
        image: "https://source.unsplash.com/400x250?heritage",
        rating: "4.2",
        description: "Explore the rich cultural heritage of Gujarat.",
        price: "7999",
        duration: "5D 4N",
        includes: [
          {
            hotel: "4-star accommodation",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "flight",
          },
        ],
      },
      {
        name: "Wildlife Safari Experience",
        image: "https://source.unsplash.com/400x250?safari",
        rating: "4.5",
        description: "Embark on a thrilling safari in Gir National Park.",
        price: "8999",
        duration: "4D 3N",
        includes: [
          {
            hotel: "Luxury wildlife resort",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "private vehicle",
          },
        ],
      },
    ],
  },
  {
    image: "https://source.unsplash.com/400x250?goa",
    name: "Goa",
    startingPrice: "5000",
    rating: "4.9",
    places: [
      {
        name: "Baga Beach",
        image: "https://source.unsplash.com/400x250?beach",
        description: "Famous for its nightlife and water sports.",
      },
      {
        name: "Fort Aguada",
        image: "https://source.unsplash.com/400x250?aguada",
        description: "A 17th-century Portuguese fort with stunning views.",
      },
      {
        name: "Dudhsagar Waterfalls",
        image: "https://source.unsplash.com/400x250?dudhsagar",
        description: "One of the tallest waterfalls in India.",
      },
    ],
    packages: [
      {
        name: "Goa Beach Retreat",
        image: "https://source.unsplash.com/400x250?beach",
        rating: "4.8",
        description: "Relax on the pristine beaches of Goa.",
        price: "6999",
        duration: "6D 5N",
        includes: [
          {
            hotel: "Beachfront resort",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "flight",
          },
        ],
      },
      {
        name: "Adventure Expedition",
        image: "https://source.unsplash.com/400x250?adventure",
        rating: "4.7",
        description: "Experience thrilling adventures in Goa.",
        price: "7999",
        duration: "5D 4N",
        includes: [
          {
            hotel: "Adventure camp",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "private vehicle",
          },
        ],
      },
    ],
  },
  {
    image: "https://source.unsplash.com/400x250?delhi",
    name: "Delhi",
    startingPrice: "3500",
    rating: "4.6",
    places: [
      {
        name: "Fatehpuri Masjid",
        image: "https://source.unsplash.com/400x250?Fatehpuri",
        description: "A historical mosque in Delhi.",
      },
      {
        name: "Qutub Minar",
        image: "https://source.unsplash.com/400x250?QutubMinar",
        description:
          "A UNESCO World Heritage Site and one of the tallest minarets in India.",
      },
      {
        name: "Raj Ghat",
        image: "https://source.unsplash.com/400x250?rajghat",
        description: "A memorial dedicated to Mahatma Gandhi.",
      },
    ],
    packages: [
      {
        name: "Romantic Golden Sky Holiday Package",
        image: "https://source.unsplash.com/400x250?Goldensky",
        rating: "4.5",
        description:
          "Experience the charm of Delhi with this romantic getaway.",
        price: "999",
        duration: "5D 4N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "flight",
          },
        ],
      },
      {
        name: "A Delightful Trip to Delhi",
        image: "https://source.unsplash.com/400x250?trip",
        rating: "4.8",
        description:
          "Explore the beauty of Delhi in this short and delightful trip.",
        price: "6499",
        duration: "3D 2N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
      },
      {
        name: "North India Golden Triangle Package",
        image: "https://source.unsplash.com/400x250?Golden Triangle",
        rating: "4.9",
        description: "Discover the wonders of North India's golden triangle.",
        price: "12500",
        duration: "4D 3N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
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
        image: "https://source.unsplash.com/400x250?jaipur",
        description: "The Pink City known for its beautiful palaces and forts.",
      },
      {
        name: "Udaipur",
        image: "https://source.unsplash.com/400x250?udaipur",
        description: "The City of Lakes, famous for its romantic setting.",
      },
      {
        name: "Jodhpur",
        image: "https://source.unsplash.com/400x250?jodhpur",
        description: "The Blue City with majestic forts and palaces.",
      },
    ],
    packages: [
      {
        name: "Royal Rajasthan Experience",
        image: "https://source.unsplash.com/400x250?rajasthan",
        rating: "4.9",
        description: "Immerse yourself in the royal culture of Rajasthan.",
        price: "8999",
        duration: "6D 5N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
      },
      {
        name: "Desert Safari Adventure",
        image: "https://source.unsplash.com/400x250?desertsafari",
        rating: "4.8",
        description: "Explore the Thar Desert with this thrilling adventure.",
        price: "7499",
        duration: "4D 3N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
      },
    ],
  },
  {
    image: "https://source.unsplash.com/400x250?maharashtra",
    name: "Maharashtra",
    startingPrice: "5500",
    rating: "4.5",
    places: [
      {
        name: "Mumbai",
        image: "https://source.unsplash.com/400x250?mumbai",
        description: "The bustling capital city of Maharashtra.",
      },
      {
        name: "Pune",
        image: "https://source.unsplash.com/400x250?pune",
        description:
          "A city known for its cultural heritage and educational institutions.",
      },
      {
        name: "Aurangabad",
        image: "https://source.unsplash.com/400x250?aurangabad",
        description: "Home to historical sites like Ajanta and Ellora Caves.",
      },
    ],
    packages: [
      {
        name: "Mumbai Explorer",
        image: "https://source.unsplash.com/400x250?mumbaiexplorer",
        rating: "4.6",
        description: "Discover the vibrant culture and landmarks of Mumbai.",
        price: "5999",
        duration: "3D 2N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
      },
      {
        name: "Adventure in Western Ghats",
        image: "https://source.unsplash.com/400x250?westernghats",
        rating: "4.7",
        description: "Explore the natural beauty of the Western Ghats.",
        price: "7999",
        duration: "4D 3N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
      },
    ],
  },
  {
    image: "https://source.unsplash.com/400x250?karnataka",
    name: "Karnataka",
    startingPrice: "12500",
    rating: "4.4",
    places: [
      {
        name: "Bangalore",
        image: "https://source.unsplash.com/400x250?bangalore",
        description:
          "The Silicon Valley of India, known for its tech industry.",
      },
      {
        name: "Mysuru",
        image: "https://source.unsplash.com/400x250?mysuru",
        description: "Famous for its palaces, especially the Mysore Palace.",
      },
      {
        name: "Coorg",
        image: "https://source.unsplash.com/400x250?coorg",
        description: "A scenic hill station known for coffee plantations.",
      },
    ],
    packages: [
      {
        name: "Bangalore Tech Tour",
        image: "https://source.unsplash.com/400x250?bangaloretechtour",
        rating: "4.5",
        description: "Explore the tech hub of Bangalore with this guided tour.",
        price: "8999",
        duration: "3D 2N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
      },
      {
        name: "Royal Mysuru Experience",
        image: "https://source.unsplash.com/400x250?royalmysuru",
        rating: "4.6",
        description: "Immerse yourself in the royal charm of Mysuru.",
        price: "7499",
        duration: "4D 3N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
      },
    ],
  },
  {
    image: "https://source.unsplash.com/400x250?tamilnadu",
    name: "Tamil Nadu",
    startingPrice: "12500",
    rating: "4.3",
    places: [
      {
        name: "Chennai",
        image: "https://source.unsplash.com/400x250?chennai",
        description:
          "The capital city known for its vibrant culture and beaches.",
      },
      {
        name: "Madurai",
        image: "https://source.unsplash.com/400x250?madurai",
        description:
          "Famous for the Meenakshi Amman Temple and cultural festivals.",
      },
      {
        name: "Ooty",
        image: "https://source.unsplash.com/400x250?ooty",
        description: "A popular hill station with picturesque landscapes.",
      },
    ],
    packages: [
      {
        name: "Chennai Beach Getaway",
        image: "https://source.unsplash.com/400x250?chennaibeach",
        rating: "4.4",
        description: "Relax on the beautiful beaches of Chennai.",
        price: "9999",
        duration: "4D 3N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
      },
      {
        name: "Cultural Splendors of Madurai",
        image: "https://source.unsplash.com/400x250?maduraiculture",
        rating: "4.3",
        description: "Experience the rich cultural heritage of Madurai.",
        price: "8499",
        duration: "3D 2N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
      },
    ],
  },
  {
    image: "https://source.unsplash.com/400x250?kerala",
    name: "Kerala",
    startingPrice: "4900",
    rating: "4.2",
    places: [
      {
        name: "Munnar",
        image: "https://source.unsplash.com/400x250?munnar",
        description:
          "A hill station known for its tea plantations and scenic beauty.",
      },
      {
        name: "Alleppey",
        image: "https://source.unsplash.com/400x250?alleppey",
        description:
          "Famous for its backwaters, houseboats, and serene landscapes.",
      },
      {
        name: "Kovalam",
        image: "https://source.unsplash.com/400x250?kovalam",
        description:
          "A beach destination with pristine shores and water activities.",
      },
    ],
    packages: [
      {
        name: "Munnar Nature Retreat",
        image: "https://source.unsplash.com/400x250?munnarretreat",
        rating: "4.3",
        description: "Immerse yourself in the natural beauty of Munnar.",
        price: "7999",
        duration: "5D 4N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
      },
      {
        name: "Backwater Bliss in Alleppey",
        image: "https://source.unsplash.com/400x250?alleppeybliss",
        rating: "4.2",
        description:
          "Experience tranquility on a houseboat in Alleppey's backwaters.",
        price: "8999",
        duration: "3D 2N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
      },
    ],
  },
  {
    image: "https://source.unsplash.com/400x250?uttarpradesh",
    name: "Uttar Pradesh",
    startingPrice: "4500",
    rating: "4.0",
    places: [
      {
        name: "Taj Mahal",
        image: "https://source.unsplash.com/400x250?tajmahal",
        description:
          "A UNESCO World Heritage Site and an iconic symbol of love.",
      },
      {
        name: "Varanasi",
        image: "https://source.unsplash.com/400x250?varanasi",
        description:
          "A spiritual city on the banks of the Ganges known for its ghats.",
      },
      {
        name: "Lucknow",
        image: "https://source.unsplash.com/400x250?lucknow",
        description:
          "The capital city known for its rich history and cultural heritage.",
      },
    ],
    packages: [
      {
        name: "Taj Mahal Marvel",
        image: "https://source.unsplash.com/400x250?tajmahalmarvel",
        rating: "4.5",
        description: "Explore the beauty of the Taj Mahal and Agra Fort.",
        price: "6999",
        duration: "4D 3N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
      },
      {
        name: "Spiritual Sojourn in Varanasi",
        image: "https://source.unsplash.com/400x250?varanasispiritual",
        rating: "4.2",
        description: "Experience spirituality along the ghats of the Ganges.",
        price: "7999",
        duration: "5D 4N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
      },
    ],
  },
  {
    image: "https://source.unsplash.com/400x250?bihar",
    name: "Bihar",
    startingPrice: "3500",
    rating: "3.0",
    places: [
      {
        name: "Bodh Gaya",
        image: "https://source.unsplash.com/400x250?bodhgaya",
        description:
          "A UNESCO World Heritage Site and a major Buddhist pilgrimage site.",
      },
      {
        name: "Patna",
        image: "https://source.unsplash.com/400x250?patna",
        description:
          "The capital city with a rich history and archaeological sites.",
      },
      {
        name: "Nalanda",
        image: "https://source.unsplash.com/400x250?nalanda",
        description:
          "Ancient center of learning and home to the ruins of Nalanda University.",
      },
    ],
    packages: [
      {
        name: "Spiritual Retreat in Bodh Gaya",
        image: "https://source.unsplash.com/400x250?bodhgayaretreat",
        rating: "3.5",
        description: "Experience tranquility in the sacred city of Bodh Gaya.",
        price: "4499",
        duration: "3D 2N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
      },
      {
        name: "Historical Patna Exploration",
        image: "https://source.unsplash.com/400x250?patnahistory",
        rating: "3.2",
        description: "Discover the historical landmarks of Patna.",
        price: "3999",
        duration: "4D 3N",
        includes: [
          {
            hotel: "upto 3 star",
            meals: "meals",
            sightseeing: "sightseeing",
            transport: "train",
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/Tour" element={<Homepage mostloved={mostloved} />} />
        <Route
          path="/Tour/best_adventure_places_india"
          element={<BestAdvePlaceIndia mostloved={mostloved} />}
        />
        <Route
          path="/Tour/best_adventure_places_india/:state"
          element={<State mostloved={mostloved} />}
        />
        <Route
          path="/Tour/best_adventure_places_india/:state/:package"
          element={<Details mostloved={mostloved} />}
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
