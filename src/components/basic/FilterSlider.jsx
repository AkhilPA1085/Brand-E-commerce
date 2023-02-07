import { useState, useEffect, useRef } from "react";

const FilterSlider = ({ initialMin, initialMax, min, max, step, priceCap }) => {
  const progressRef = useRef(null);
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  const handleMin = (e) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) > parseInt(maxValue)) {
      } else {
        setMinValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
      }
    }
  };

  const handleMax = (e) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) < parseInt(minValue)) {
      } else {
        setMaxValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
      }
    }
  };

  useEffect(() => {
    progressRef.current.style.left = (minValue / max) * step + "%";
    progressRef.current.style.right = step - (maxValue / max) * step + "%";
  }, [minValue, maxValue, max, step]);

  return (
    <>
      <p className="text-sm text-gray-700/[0.6] uppercase font-bold mb-4">
        Filter by price
      </p>
      <div className="flex flex-col">
        <div className="slider relative h-1 rounded-md bg-gray-300 w-11/12">
          <div
            className="progress absolute h-1 bg-black rounded "
            ref={progressRef}
          ></div>
        </div>

        <div className="range-input relative  w-11/12">
          <input
            onChange={handleMin}
            type="range"
            min={min}
            step={step}
            max={max}
            value={minValue}
            className="range-min absolute w-full  -top-1  h-1   bg-transparent  appearance-none pointer-events-none"
          />

          <input
            onChange={handleMax}
            type="range"
            min={min}
            step={step}
            max={max}
            value={maxValue}
            className="range-max absolute w-full  -top-1 h-1  bg-transparent appearance-none  pointer-events-none"
          />
        </div>
        <div className="flex items-center my-6">
          <div className="font-semibold text-sm capitalize bg-[#E5E5E5] rounded-3xl py-1 px-2">
            {" "}
            filter
          </div>
          <div className="flex items-center justify-between ml-2">
            <div className="font-semibold text-sm capitalize text-gray-700/[0.6]">
              {" "}
              price:
            </div>
            <div className="font-semibold text-sm capitalize text-gray-700/[0.6]">
              {" "}
              {minValue}
            </div>
            <div className="font-semibold text-sm capitalize mx-2 text-gray-700/[0.6]">
              {" "}
              -
            </div>
            <div className="font-semibold text-sm capitalize text-gray-700/[0.6]">
              {" "}
              {maxValue}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSlider;
