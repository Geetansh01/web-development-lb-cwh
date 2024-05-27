import React from "react";
import { useState } from "react";
import Navbar from "./Components/Navbar.jsx";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, myFuncDouble } from "./Redux/counter/counterSlice.js";

function App() {
  const count = useSelector((state) => state.counter.value); //Using "count" state from redux store
  const dispatch = useDispatch();

  return (
    <>
      <Navbar/>
      <div>count is {count} </div>
      <button onClick={() => {dispatch(increment())}} >+</button>
      <button onClick={() => {dispatch(decrement())}} >-</button>
      <button onClick={() => {dispatch(myFuncDouble())}} >x2</button>
      <button onClick={() => {dispatch(incrementByAmount(5))}} >+5</button>
    </>
  );
}

export default App;
