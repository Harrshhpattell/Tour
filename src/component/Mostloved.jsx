import "./css/lookingfor.css";

const mostloved = [
  {
    image: "https://source.unsplash.com/400x250?gujarat",
    name: "Gujarat",
  },
  {
    image: "https://source.unsplash.com/400x250?goa",
    name: "Goa",
  },
  {
    image: "https://source.unsplash.com/400x250?delhi",
    name: "Delhi",
  },
  {
    image: "https://source.unsplash.com/400x250?rajasthan",
    name: "Rajasthan",
  },
  {
    image: "https://source.unsplash.com/400x250?maharashtra",
    name: "Maharashtra",
  },
  {
    image: "https://source.unsplash.com/400x250?karnataka",
    name: "Karnataka",
  },
  {
    image: "https://source.unsplash.com/400x250?tamilnadu",
    name: "Tamil Nadu",
  },
  {
    image: "https://source.unsplash.com/400x250?kerala",
    name: "Kerala",
  },
  {
    image: "https://source.unsplash.com/400x250?uttarpradesh",
    name: "Uttar Pradesh",
  },
  {
    image: "https://source.unsplash.com/400x250?bihar",
    name: "Bihar",
  },
];

export default function Mostloved() {
  return (
    <div className="Lookingfor">
      <h1>Most Loved Destination!</h1>
      <div className="lists">
        {mostloved.map((item, index) => (
          <div key={index} className="list-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
