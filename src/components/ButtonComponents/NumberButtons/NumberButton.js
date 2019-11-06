import React from "react";
// import { exportSpecifier } from "@babel/types";

const NumberButton = props => {

  /* Display a button element rendering the data being passed down from the parent container on props */
  return (
    <button className="button number">
      {props.numberData}
    </button>
  );
};
export default NumberButton;
