import React, { useEffect, useState } from "react";

// Working with Events
// Passing Arguments to Event Handlers
// Conditional rendering

const App = () => {
  const [count, setCount] = useState(0);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleInc(number) {
    setCount(count + number);
  }
  function handleDec(number) {
    setCount(count - number);
  }

  useEffect(() => {
    setTimeout(() => {
      setData(["one", "two", "three"]);
      setLoading(false);
    }, 3000);
  });

  return (
    <div>
      <h1>Count :{count}</h1>
      <button
        onClick={() => {
          handleInc(5);
        }}
      >
        Inc by five
      </button>
      <button
        disabled={count <= 0}
        onClick={() => {
          handleDec(10);
        }}
      >
        Dec by 10
      </button>

      <div>
        {/* condition rendering  */}
        {loading && <h2>...loading</h2>}
        {data &&
          data.map((item, index) => {
            return <h1 key={index}>{item}</h1>;
          })}
      </div>
    </div>
  );
};

export default App;
