import React, { useReducer } from "react";

const ReducerCom = () => {
  const [state, dispatch] = useReducer(reducer, {
    value: 0,
  });

  function reducer(state, action) {

    switch (action.type) {
      case "inc":
        return { ...state, value: state.value + 1 };

      case "dec":
      return { ...state, value: state.value - 1 };


      default:
        return state
 
    }
  }

  return (
    <div>
      <h1>use Reducer hook</h1>
      <p>Count:{state.value}</p>
      <button
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        Dec
      </button>
    </div>
  );
};

export default ReducerCom;
