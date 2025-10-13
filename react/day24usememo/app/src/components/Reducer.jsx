import React, { useReducer } from "react";

const ReducerCom = () => {
  const [state, dispatch] = useReducer(reducer, {
    value: 0,
  });

  function reducer(state, action) {
    switch (action.type) {
      case "inc":
        state.value = state.value + 1;
        break;
      case "dec":
        state.value = state.value - 1;
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <h1>use Reducer hook</h1>
      <p>Count:{}</p>
      <button>Inc</button>
      <button>Dec</button>
    </div>
  );
};

export default ReducerCom;
