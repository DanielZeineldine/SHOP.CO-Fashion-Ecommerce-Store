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
          {/* <img
            className={`check check${color} ${
              activeColor === color ? "showCheck" : ""
            }`}
            src="check.svg"
            alt="check"
          /> */}
          <svg
            className={`check check${color} ${
              activeColor === color ? "showCheck" : ""
            }`}
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5306 2.03057L5.5306 10.0306C5.46092 10.1005 5.37813 10.156 5.28696 10.1938C5.1958 10.2317 5.09806 10.2512 4.99935 10.2512C4.90064 10.2512 4.8029 10.2317 4.71173 10.1938C4.62057 10.156 4.53778 10.1005 4.4681 10.0306L0.968098 6.53057C0.898333 6.4608 0.842993 6.37798 0.805236 6.28683C0.76748 6.19568 0.748047 6.09798 0.748047 5.99932C0.748047 5.90066 0.76748 5.80296 0.805236 5.71181C0.842993 5.62066 0.898333 5.53783 0.968098 5.46807C1.03786 5.3983 1.12069 5.34296 1.21184 5.30521C1.30299 5.26745 1.40069 5.24802 1.49935 5.24802C1.59801 5.24802 1.69571 5.26745 1.78686 5.30521C1.87801 5.34296 1.96083 5.3983 2.0306 5.46807L4.99997 8.43744L12.4693 0.969318C12.6102 0.828422 12.8013 0.749268 13.0006 0.749268C13.1999 0.749268 13.391 0.828422 13.5318 0.969318C13.6727 1.11021 13.7519 1.30131 13.7519 1.50057C13.7519 1.69983 13.6727 1.89092 13.5318 2.03182L13.5306 2.03057Z" />
          </svg>
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
