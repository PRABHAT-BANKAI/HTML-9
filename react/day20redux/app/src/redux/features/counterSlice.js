import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("countData")) || 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
      localStorage.setItem("countData", JSON.stringify(state.value));
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("countData", JSON.stringify(state.value));
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      localStorage.setItem("countData", JSON.stringify(state.value));
    },
    multiplyBYAmount: (state, action) => {
      state.value *= action.payload;
      localStorage.setItem("countData", JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, multiplyBYAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
