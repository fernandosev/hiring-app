import React from "react";

import { render } from "@testing-library/react-native";

import Button from "~/components/Button";

describe("Header", () => {
  test("if button name is hidden if loading is true", () => {
    const { getByTestId } = render(
      <Button name="Test Button" action={() => {}} loading={true} />
    );

    expect(() => getByTestId("buttonName")).toThrow();
  });

  test("if button name is hidden if loading is true", () => {
    const { getByTestId } = render(
      <Button name="Test Button" action={() => {}} loading={false} />
    );

    expect(() => getByTestId("buttonName")).toBeTruthy();
  });
});
