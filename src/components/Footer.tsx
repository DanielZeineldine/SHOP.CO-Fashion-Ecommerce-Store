import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="newsLetter">
        <h2 className="h2">STAY IN THE LOOP WITH OUR NEWEST OFFERS</h2>
        <form className="form">
          <div className="form__email">
            <img className="email" src="/footer/email.svg" alt="" />
            <input
              className="input"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <button className="news__btn" type="button">
            Subscribe
          </button>
        </form>
      </div>
      <div className="footer__top">
        <div className="fooTop__1">
          <h2 className="footer__title">SHOP.CO</h2>
          <p className="fooTop1__desc">
            We offer a diverse range of clothing that complements your unique
            style and leaves you feeling confident.
          </p>
        </div>
        <div className="fooTop__links">
          <div className="fooTop__2">
            <h3>COMPANY</h3>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Works</a>
            <a href="#">Career</a>
          </div>
          <div className="fooTop__3">
            <h3>HELP</h3>
            <a href="#">Customer Support</a>
            <a href="#">Delivery Details</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="fooTop__4">
            <h3>FAQ</h3>
            <a href="#">Account</a>
            <a href="#">Manage Deliveries</a>
            <a href="#">Orders</a>
            <a href="#">Payments</a>
          </div>
          <div className="fooTop__5">
            <h3>RESOURCES</h3>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
          </div>
        </div>
      </div>
      <div className="footer__bot"></div>
    </div>
  );
}
