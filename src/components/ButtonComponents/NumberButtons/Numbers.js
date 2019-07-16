import React, { useState} from "react";

//import any components needed
import NumbersButton from './NumberButton';

//Import your array data to from the provided data file
import { numbers } from '../../../data'



const Numbers = () => {

  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers)

  return (
    <div>
      {numberState.map(number => {
        return(
       <NumbersButton number = {number} />
      )})}
    </div>
  );
};

export default Numbers
