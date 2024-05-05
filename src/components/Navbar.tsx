import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) setDropdown(false);
    else setDropdown(true);
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) setDropdown(false);
    else setDropdown(false);
  };
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img className="hamburger" src="hamburger.svg" alt="" />
        <NavLink className={"navLink navLink__home navLink__logo"} to={"/"}>
          <h1 className="shopCo">SHOP.CO</h1>
        </NavLink>
        <div className="navbar__links">
          <NavLink className={"navLink navLink__home"} to={"/"}>
            Home
          </NavLink>
          <div
            className="navLink__shop"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink className={"navLink navLink__shop"} to={"/shop"}>
              Shop
              <img className="img downArrow" src="down-arrow.svg" alt="" />
            </NavLink>
            {dropdown && <Dropdown />}
            {/* {<Dropdown />} */}
          </div>
          <NavLink className={"navLink"} to={"/on-sale"}>
            On Sale
          </NavLink>
          <NavLink className={"navLink"} to={"/new-arrivals"}>
            New Arrivals
          </NavLink>
          <NavLink className={"navLink"} to={"/brands"}>
            Brands
          </NavLink>
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__search">
          <img src="search.svg" alt="search icon" />
          <input type="text" placeholder="Search for products..." />
        </div>
        <img src="cart.svg" alt="cart" />
        <img src="profile.svg" alt="profile" />
      </div>
    </div>
  );
}
