import React, { useCallback, useState } from "react";
import Child from "./Child";

const UseCall = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log("rendering parent ..");
  function handleInc() {
    console.log("inc count 1");
    setCount(count + 1);
  }

  const handleInc2 = useCallback(() => {
    console.log("count2,render");
    setCount2(count2 + 1);
  }, [count2]);
  return (
    <div>
      <h1>use Callback</h1>
      <p>Count: {count}</p>
      <button onClick={handleInc}>Inc</button>

      <Child handleInc2={handleInc2} />
    </div>
  );
};

export default UseCall;
