import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("data")) || 0
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(count));
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <input type="text" name="" id="" />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default App;
