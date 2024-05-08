import { NavLink } from "react-router-dom";
import "./Home.css";
import "./MediaQueries.css";

export default function Home() {
  return (
    <div className="home">
      <div className="first homPic">
        <div className="left">
          <h2 className="h2">FIND CLOTHES THAT MATCH YOUR STYLE</h2>
          <p className="desc">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <NavLink className="shopNow" to={"/shop"}>
            Shop Now
          </NavLink>
          <div className="numbers">
            <div className="num__1">
              <p className="top">200+</p>
              <p className="bot">International Brands</p>
            </div>
            <div className="dividerNumbers"></div>
            <div className="num__2">
              <p className="top">20000+</p>
              <p className="bot">High-Quality Products</p>
            </div>
            <div className="dividerNumbers"></div>
            <div className="num__3">
              <p className="top">30000+</p>
              <p className="bot">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="right">
          <img className="vector vec1" src="/home/Vector.svg" alt="vector" />
          <img className="vector vec2" src="/home/Vector.svg" alt="vector" />
          <img
            className="img trendy"
            src="/home/trendy.svg"
            alt="guy and girl in outfit"
            loading="lazy"
          />
        </div>
      </div>
      <div className="second">
        {/* <div className="brands">
          <img className="brand__1" src="/home/brands/versace.svg" alt="" />
          <img className="brand__2" src="/home/brands/zara.svg" alt="" />
          <img className="brand__3" src="/home/brands/gucci.svg" alt="" />
          <img className="brand__4" src="/home/brands/prada.svg" alt="" />
          <img className="brand__5" src="/home/brands/calvin.svg" alt="" />
        </div> */}
        <div className="newArrivals">
          <h2 className="h2 newArrivals__title">New Arrivals</h2>
          <div className="products">
            <div className="product product__1">
              <img
                className="product__img prodImg__1"
                src="/home/products/tshirt.png"
                alt=""
              />
              <div className="product__info">
                <p className="product__title">T-SHIRT WITH TAPE</p>
              </div>
            </div>
            <div className="product product__2">
              <img
                className="product__img prodImg__2"
                src="/home/products/fitjeans.png"
                alt=""
              />
              <div className="product__info">
                <p className="product__title">SKINNY FIT JEANS</p>
              </div>
            </div>
            <div className="product product__3">
              <img
                className="product__img prodImg__3"
                src="/home/products/checkeredshit.png"
                alt=""
              />
              <div className="product__info">
                <p className="product__title">CHECKERED SHIRT</p>
              </div>
            </div>
            <div className="product product__4">
              <img
                className="product__img prodImg__4"
                src="/home/products/sleeveshirt.png"
                alt=""
              />
              <div className="product__info">
                <p className="product__title">T-SHIRT</p>
              </div>
            </div>
          </div>
          <a className="viewAll" href="#">
            View All
          </a>
        </div>
        <div className="divider"></div>
        <div className="bestSelling">
          <h2 className="h2 bestSelling__title">Best Selling</h2>
          <div className="products">
            <div className="product product__1">
              <img
                className="product__img prodImg__1"
                src="/home/products/tshirt.png"
                alt=""
              />
              <div className="product__info">
                <h3 className="product__title">T-SHIRT WITH TAPE</h3>
              </div>
            </div>
            <div className="product product__2">
              <img
                className="product__img prodImg__2"
                src="/home/products/fitjeans.png"
                alt=""
              />
              <div className="product__info">
                <h3 className="product__title">SKINNY FIT JEANS</h3>
              </div>
            </div>
            <div className="product product__3">
              <img
                className="product__img prodImg__3"
                src="/home/products/checkeredshit.png"
                alt=""
              />
              <div className="product__info">
                <h3 className="product__title">CHECKERED SHIRT</h3>
              </div>
            </div>
            <div className="product product__4">
              <img
                className="product__img prodImg__4"
                src="/home/products/sleeveshirt.png"
                alt=""
              />
              <div className="product__info">
                <h3 className="product__title">T-SHIRT</h3>
              </div>
            </div>
          </div>
          <a className="viewAll" href="#">
            View All
          </a>
        </div>
      </div>
    </div>
  );
}
