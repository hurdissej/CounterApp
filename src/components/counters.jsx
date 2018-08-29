import React, { Component } from "react";
import Counter from "./counter";

const Counters = props => {
  const { onReset, counters, onDelete, onIncrement, onDecrement } = props;
  console.log("Counters rendered");
  return (
    <div>
      <button className="btn btn-primary btn-small m2" onClick={onReset}>
        Reset
      </button>
      {counters.map(x => (
        <Counter
          counter={x}
          key={x.id}
          onIncrement={x => onIncrement(x)}
          onDecrement={x => onDecrement(x)}
          onDelete={x => onDelete(x)}
        />
      ))}
    </div>
  );
};

export default Counters;
