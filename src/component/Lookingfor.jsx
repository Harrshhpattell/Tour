import "./css/lookingfor.css";

const lookingfor = [
  {
    image: "https://source.unsplash.com/300x250?nature",
    name: "Nature",
  },
  {
    image: "https://source.unsplash.com/300x250?Honeymoon",
    name: "Honeymoon",
  },
  {
    image: "https://source.unsplash.com/300x250?Adventure",
    name: "Adventure",
  },
  {
    image: "https://source.unsplash.com/300x250?City",
    name: "City Breaks",
  },
  {
    image: "https://source.unsplash.com/300x250?Cultural",
    name: "Cultural Experiences",
  },
  {
    image: "https://source.unsplash.com/300x250?Beach",
    name: "Beach Escapes",
  },
  {
    image: "https://source.unsplash.com/300x250?Wildlife",
    name: "Wildlife Safari",
  },
  {
    image: "https://source.unsplash.com/300x250?Luxury",
    name: "Luxury Retreats",
  },
  {
    image: "https://source.unsplash.com/300x250?Historical",
    name: "Historical Journeys",
  },
  {
    image: "https://source.unsplash.com/300x250?Mountain",
    name: "Mountain Expeditions",
  },
  {
    image: "https://source.unsplash.com/300x250?Getaways",
    name: "Relaxing Getaways",
  },
];

export default function Lookingfor() {
  return (
    <div className="Lookingfor">
      <h1>Are You Looking For?</h1>
      <div className="lists">
        {lookingfor.map((item, index) => (
          <div key={index} className="list-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
