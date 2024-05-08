import { useState } from "react";
import "./ShopCategories.scss";
const CATEGORIES = ["men", "women", "kids", "casual", "gym", "party", "formal"];
export default function ShopCategories() {
  const [activeCategory, setActiveCategory] = useState("");
  function handleClick(category: string) {
    setActiveCategory(category);
  }
  return (
    <div className="sP__categories">
      {CATEGORIES.map((category) => (
        <>
          <div
            key={category}
            onClick={() => handleClick(category)}
            className={`sP__category ${
              activeCategory === category ? "active" : ""
            }`}
          >
            <div className="sP__category__imgCont">
              <img src={`/shop/shop-categories/${category}.png`} alt="" />
            </div>
            <p className="spCategory__name">{category}</p>
          </div>
        </>
      ))}
    </div>
  );
}
