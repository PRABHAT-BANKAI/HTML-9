import { useState } from "react";
import "./App.css";

const App = () => {
  // useState  is hook of react and hook is feature of react// help in state management in function component

  let [count, setCount] = useState(0); // put in top function

  function handleIncrement() {
    setCount(count + 1); // async
  }
  console.log(count);
  console.log("render");

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1 style={{ backgroundColor: "yellow" }}>Hello world </h1>
      <h2 className="count">Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;
