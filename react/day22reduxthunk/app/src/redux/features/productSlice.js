import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("fetchProductData", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  // console.log(response.data, "data");
  return response.data;
});

const initialState = {
  product: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {

      state.product = [...action.payload];
    });
  },
});

export const { incrementByAmount } = productSlice.actions;

export default productSlice.reducer;
