import React from "react";

const NumberButton = (props) => {
  const {number} = props
  return (
    <>
    <button>{number}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton