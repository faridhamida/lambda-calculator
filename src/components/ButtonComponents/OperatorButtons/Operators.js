import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
// import { utimesSync } from "fs";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [items] = useState(operators);
  /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
  return (
    <div className="operators">
      {items.map((item, index) =>
        (<OperatorButton key={index} operatorData={item.char} />)
      )}
    </div>
  );
};

export default Operators;