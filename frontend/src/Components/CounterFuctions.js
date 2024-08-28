import e from "cors";
import React, { useState } from "react";

function CounterFunctions() {
  let [number, setNumber] = useState(0);

  function Increment(){
    setNumber(number + 1);
  };

  return (
    <div>
      <h3>Functional component</h3>
      <h1>Counter = {number}</h1>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}

export default CounterFunctions;
