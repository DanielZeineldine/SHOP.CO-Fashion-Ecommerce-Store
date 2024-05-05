import { useState } from "react";
import "./PriceSlider.scss";
// import ReactSlider from "react-slider";
import Slider from "react-slider";
const MIN = 0;
const MAX = 1000;
export default function PriceSlider() {
  const [values, setValues] = useState([300, 800]);
  console.log(values);
  return (
    <div className="priceSlider">
      <Slider
        className="slider"
        onChange={setValues}
        value={values}
        min={MIN}
        max={MAX}
      />
      <div className="slider__values">
        <div className="minValue">${values[0]}</div>
        <div className="minValue">${values[1]}</div>
      </div>
    </div>
  );
}
