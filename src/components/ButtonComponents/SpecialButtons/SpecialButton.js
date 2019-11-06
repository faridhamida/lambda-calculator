import React from "react";

const SpecialButton = props => {
  /* Display a button element rendering the data being passed down from the parent container on props */

  return (
    <button className="button special">
      {props.specialData}
    </button>
  );
};
export default SpecialButton;