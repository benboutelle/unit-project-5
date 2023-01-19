import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { useDispatch } from "react-redux";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
    const dispatch= useDispatch()
  const currentPotentials = useSelector(selectPotentials);
  console.log(currentPotentials);
  return (
    <div className="stack">
      {currentPotentials.map((e, i) => {
        return (
          <h2 key={e.name.offical} className="country-option" onClick={()=>{dispatch(setDisplayCountry(currentPotentials[i]))}}>
            {e.name.common}
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
