//Code copied from documentation : " https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice "

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
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
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    //My own custom function to change the state (It will multiply the state by 2)
    myFuncDouble: (state) => {
      state.value = state.value * 2;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, myFuncDouble } = counterSlice.actions;

export default counterSlice.reducer;
