import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { initialState, reducer} from "../reducer";
import { render, cleanup, fireEvent } from "@testing-library/react";
import CounterDec from "./CounterDec";

//passing central storage to component
const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>, store),
  };
};

afterEach(cleanup);

it("check data to equal to 0", () => {
  const { getByTestId } = renderWithRedux(<CounterDec />);
  expect(getByTestId("counter")).toHaveTextContent("0");
});

it("incremnet through redux", () => {
  const { getByTestId } = renderWithRedux(<CounterDec />, {
    initialState: { count: 5 },
  });

  fireEvent.click(getByTestId("button-up"));
  expect(getByTestId("counter")).toHaveTextContent("6");
});

it("decrement through redux", () => {
  const { getByTestId } = renderWithRedux(<CounterDec />, {
    initialState: { count: 100 },
  });

  fireEvent.click(getByTestId("button-down"));
  expect(getByTestId("counter")).toHaveTextContent("99");
});
