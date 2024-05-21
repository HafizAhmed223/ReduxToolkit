import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  initialState: 0,
  name: "counter",
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: (state) => state - state,
    addByAmount: (state, action) => state + action.payload,
  },
});

export const { increment, decrement, reset, addByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
