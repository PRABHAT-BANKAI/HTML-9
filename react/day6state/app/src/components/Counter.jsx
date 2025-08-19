import React from "react";

const Counter = ({ count, setCount }) => {

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        disabled={count == 0}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default Counter;
