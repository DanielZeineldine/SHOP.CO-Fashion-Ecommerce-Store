import ColorPicker from "../components/ColorPicker";
import PriceSlider from "../components/PriceSlider";
import "./Shop.scss";
export default function Shop() {
  return (
    <div className="shop">
      <div className="topLine"></div>
      <div className="directions">
        <p className="directions__home">Home</p>
        <img className="arrow__svg" src="directions-arrow.svg" alt="" />
        <p className="directions__shop">Shop</p>
      </div>
      <div className="shop__filters">
        <div className="shopFilters__filters">
          <h3>Filters</h3>
          <img src="filters.svg" alt="filters icon" />
        </div>
        <div className="filters__divider"></div>
        <div className="shopFilters__categories">
          <div className="shopFilters__category sF__cat1">
            <p>T-shirts</p>
            <img src="directions-arrow.svg" alt="" />
          </div>
          <div className="shopFilters__category sF__cat2">
            <p>Sports</p>
            <img src="directions-arrow.svg" alt="" />
          </div>
          <div className="shopFilters__category sF__cat3">
            <p>Shirts</p>
            <img src="directions-arrow.svg" alt="" />
          </div>
          <div className="shopFilters__category sF__cat4">
            <p>Hoodie</p>
            <img src="directions-arrow.svg" alt="" />
          </div>
          <div className="shopFilters__category sF__cat5">
            <p>Jeans</p>
            <img src="directions-arrow.svg" alt="" />
          </div>
        </div>
        <div className="filters__divider"></div>
        <div className="shopFilters__price">
          <div className="shopFilters__price__top">
            <h3>Price</h3>
            <img src="down-arrow.svg" alt="" />
          </div>
          <PriceSlider />
        </div>
        <div className="filters__divider"></div>
        <div className="shopFilters__colors">
          <div className="shopFilters__colors__top">
            <h3>Colors</h3>
            <img src="down-arrow.svg" alt="" />
          </div>
          <ColorPicker />
        </div>
        <div className="filters__divider"></div>
        <div className="shopFilters__sizes">
          <div className="shopFilters__sizes__top">
            <h3>Sizes</h3>
            <img src="down-arrow.svg" alt="" />
          </div>
          <div className="sFSizes">
            <p>XX-Small</p>
            <p>X-Small</p>
            <p>Small</p>
            <p>Medium</p>
            <p>Large</p>
            <p>X-Large</p>
            <p>XX-Large</p>
            <p>3X-Large</p>
            <p>4X-Large</p>
          </div>
        </div>
        <div className="filters__divider"></div>
        <div className="shopFilters__dressStyles">
          <div className="shopFilters__dressStyle__top">
            <h3>Dress Style</h3>
            <img src="down-arrow.svg" alt="" />
          </div>
          <div className="shopFilters__dressStyle sF__dS1">
            <p>Casual</p>
            <img src="directions-arrow.svg" alt="" />
          </div>
          <div className="shopFilters__dressStyle sF__dS2">
            <p>Formal</p>
            <img src="directions-arrow.svg" alt="" />
          </div>
          <div className="shopFilters__dressStyle sF__dS3">
            <p>Party</p>
            <img src="directions-arrow.svg" alt="" />
          </div>
          <div className="shopFilters__dressStyle sF__dS4">
            <p>Gym</p>
            <img src="directions-arrow.svg" alt="" />
          </div>
        </div>
      </div>
      <input type="range" min={0} max={100} />
    </div>
  );
}
