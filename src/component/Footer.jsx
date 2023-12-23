import "./css/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-sec startYourTour">
        <h1>Start Your Tour</h1>
        <p>About Us</p>
        <p>career</p>
        <p>blog</p>
        <p>testimonial</p>
        <p>sitemap</p>
        <p>contact us</p>
      </div>

      <div className="footer-sec policy">
        <h1>Policy</h1>
        <p>Frequently Asked Questions</p>
        <p>Cancellation Policy</p>
        <p>Privacy Policy</p>
        <p>Payment Policy</p>
      </div>

      <div className=" talkToUs">
        <h1>Talk To Us</h1>
        <p>info@startourtour.com</p>
        <p>+91 99999 99999</p>
        <p>+91 99999 99999</p>
        <div className="subscribe-box">
          <h2>Subscribe us for travel ideas!</h2>
          <div className="box">
            <input
              type="email"
              id="email"
              className="email"
              placeholder="Your email"
            />
            <button className="subs-btn">{">"}</button>
          </div>
        </div>
      </div>

      <div className="footer-sec social">
        <h1>Social Media</h1>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>twitter (X)</p>
        <p>LinkedIn</p>
        <h2>SYT TravelTech pvt Ltd</h2>
      </div>
    </div>
  );
}
