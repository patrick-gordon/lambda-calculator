import React, {useState} from "react";

//import any components needed
import SpecialButtons from './SpecialButton';

//Import your array data to from the provided data file
import {specials} from '../../../data';

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials)

  return (
    <div>
       {specialState.map(special => {
         return(
         <SpecialButtons special={special} />
       )})}
    </div>
  );
};

export default Specials