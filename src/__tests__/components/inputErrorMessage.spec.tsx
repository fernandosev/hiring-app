import React from "react";

import { render } from "@testing-library/react-native";
import InputErrorMessage from "~/components/InputErrorMessage";

describe("Icom Component", () => {
  test("if message is rendered", () => {
    const errorMessage = "O email é obrigatório";
    const { getByText } = render(<InputErrorMessage message={errorMessage} />);

    expect(getByText(errorMessage)).toBeTruthy();
  });
});
