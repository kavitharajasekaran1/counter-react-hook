import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{counter.counter}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        {" "}
        INCREMENT
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        {" "}
        DECREMENT
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}> RESET</button>
    </div>
  );
};
export default Counter;
