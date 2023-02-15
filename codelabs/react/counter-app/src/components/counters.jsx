import React, { useState } from "react";
import Counter from "./counter";

const Counters = (props) => {
  console.log("counters init", props);
  return (
    <div>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          value={counter.value}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
          counter={counter}
        ></Counter>
      ))}
    </div>
  );
};

export default Counters;
