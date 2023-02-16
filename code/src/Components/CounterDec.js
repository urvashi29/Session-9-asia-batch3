import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterDec = () => {
  const counter = useSelector((state) => state.count);
  console.log(counter);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
  };

  return (
    <>
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" onClick={increment}>
        Up
      </button>
      <button data-testid="button-down" onClick={decrement}>
        Down
      </button>
    </>
  );
};

export default CounterDec;
