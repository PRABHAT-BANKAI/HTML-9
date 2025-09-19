import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState(0);
  let ref = useRef(0);

  function handleCount() {
    ref.current = ref.current + 1;
    console.log(ref);
  }
  return (
    <div>
      <p>count :{state}</p>
      <button
        onClick={() => {
          setState((prev) => prev + 1);
          setState((prev) => prev + 1);
          setState((prev) => prev + 1);
        }}
      >
        Inc
      </button>

      <p>count2 :{ref.current}</p>
      <button onClick={handleCount}>inc2</button>
    </div>
  );
};

export default App;
