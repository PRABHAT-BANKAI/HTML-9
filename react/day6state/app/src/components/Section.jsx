import React from "react";
import Counter from "./Counter";

const Section = ({ count, setCount }) => {
  return (
    <div>
      <Counter count={count} setCount={setCount} />
    </div>
  );
};

export default Section;
