import React, { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem("data"))|| 0);

  function reset() {
    setValue(0);
  }
  function handleInc() {
    setValue(value + 1);
  }
  function handleDec() {
    setValue(value - 1);
  }

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(value));
  }, [value]);
  return (
    <div>
      <h1>Count application</h1>

      <p>Count : {value}</p>
      <button onClick={reset}>Reset</button>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
};

export default App;
