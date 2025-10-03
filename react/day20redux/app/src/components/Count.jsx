import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
    const { value } = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Count : {value}</h1>
    </div>
  );
};

export default Count;
