import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  multiplyBYAmount,
} from "./redux/features/counterSlice";
import Count from "./components/Count";

const App = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <Count />
      <h1>Count : {value}</h1>
      <br />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        dec
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        increment by amount
      </button>
      <button
        onClick={() => {
          dispatch(multiplyBYAmount(10));
        }}
      >
        multiply by amount
      </button>
    </div>
  );
};

export default App;
