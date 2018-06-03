import * as React from "react";
import { render, Simulate, wait } from "react-testing-library";
import { Header } from "../Header";

test("Test Header", () => {
  describe("Should render.", () => {
    const { getByText } = render(<Header>Hi</Header>);

    expect(getByText("Hi")).toBeTruthy();
  });
});
