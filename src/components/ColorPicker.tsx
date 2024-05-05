import { useState } from "react";
import "./ColorPicker.scss";

const colors = [
  "color1",
  "color2",
  "color3",
  "color4",
  "color5",
  "color6",
  "color7",
  "color8",
  "color9",
  "color10",
];
export default function ColorPicker() {
  const [activeColor, setActiveColor] = useState("");

  function handleClick(color: string) {
    setActiveColor(color);
  }
  function getColorClass(color: string) {
    if (activeColor === color) return "active showCheck";
    else return "";
  }
  return (
    <div className="colorPicker">
      {colors.map((color, index) => (
        <div
          className={
            `colorPicker__color ` + color + " " + getColorClass("color1")
          }
          onClick={() => handleClick(color)}
          key={index}
        >
          <img
            className={`check check${color} ${
              activeColor === color ? "showCheck" : ""
            }`}
            src="check.svg"
            alt="check"
          />
        </div>
      ))}

      {/* <div
        className={`colorPicker__color color1` + getColorClass("color1")}
        onClick={() => handleClick("color1")}
      >
        <img
          className={`check ${activeColor === "color1" ? "showCheck" : ""}`}
          src="check.svg"
          alt="check"
        />
      </div> */}
    </div>
  );
}
