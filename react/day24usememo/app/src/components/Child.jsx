import React, { memo } from "react";

const Child = ({ handleInc2 }) => {
  console.log("Child rendered");
  return (
    <div>
      <h1>Child</h1>
      <button onClick={handleInc2}>Inc 2</button>
    </div>
  );
};

export default memo(Child);
