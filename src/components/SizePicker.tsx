import { useState } from "react";
import "./SizePicker.scss";

const SIZES = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];
export default function SizePicker() {
  const [activeSize, setActiveSize] = useState("");
  function handleClick(size: string) {
    setActiveSize(size);
  }
  function getSizeClass(size: string) {
    if (activeSize === size) return "active";
    else return "";
  }
  return (
    <div className="sF__sizes">
      {SIZES.map((size) => (
        <p
          className={`sF__size ` + size + ` ` + getSizeClass(size)}
          onClick={() => handleClick(size)}
          key={size}
        >
          {size}
        </p>
      ))}
    </div>
  );
}
