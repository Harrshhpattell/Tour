import "./css/safety.css";
const safety = [
  {
    image: "https://source.unsplash.com/500x300?trave;",
    name: "Gujarat",
  },
  {
    image: "https://source.unsplash.com/500x300?distance",
    name: "Goa",
  },
  {
    image: "https://source.unsplash.com/500x300?safety",
  },
];

export default function Safety() {
  return (
    <div className="safety">
      <h1>Your Safety Is Our Priority</h1>
      <p>
        we are actively with our holidays partners to maintain the safety
        measures for providing you a risk free vacation
      </p>
      <div className="safetyimages">
        {safety.map((image, index) => (
          <div key={index} className="image">
            <img src={image.image} alt={image.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
