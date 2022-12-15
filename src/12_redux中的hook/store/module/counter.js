import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 99,
    message: "hello world",
  },
  reducers: {
    addNumberAction(state, { payload }) {
      state.counter = state.counter + payload;
    },
    subNumberAction(state, { payload }) {
      state.counter = state.counter - payload;
    },
    changeMessageAction(state, { payload }) {
      state.message = payload;
    },
  },
});

export const { addNumberAction, subNumberAction, changeMessageAction } =
  counterSlice.actions;

export default counterSlice.reducer;
