import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../utils/CounterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleSet = (e) => {
    const 
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <div style={{ marginTop: "20px" }}>
        <input type="number" placeholder="Enter " onChange={handleSet} />
      </div>
    </div>
  );
};

export default Counter;
