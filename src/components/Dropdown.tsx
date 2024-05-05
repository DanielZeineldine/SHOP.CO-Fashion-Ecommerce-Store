import { NavLink } from "react-router-dom";
import { ShopItems } from "./ShopItems";
import "./Dropdown.css";

export default function Dropdown() {
  return (
    <div className="dropdown__div">
      <div className="dropdown">
        <ul>
          {ShopItems.map((item, index) => (
            <li className="li" key={index}>
              <NavLink className={"drop__navLink"} to={item.path}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
