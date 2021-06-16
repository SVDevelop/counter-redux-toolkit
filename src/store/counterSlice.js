import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0
  },

  reducers: {
    increment(state, action) {
      state.value += action.payload;
    },

    decrement(state, action) {
      state.value -= action.payload;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      dispatch(increment(1));
    }, (1000 / amount) * (i + 1));
  }
};

export default counterSlice.reducer;
