import React from "react";

import { render } from "@testing-library/react-native";

import Icon from "~/components/Icon";

describe("Icom Component", () => {
  test("if icon exists in the Library", () => {
    const { getByTestId } = render(<Icon name="plus" />);

    expect(getByTestId("icon").props.children[0]).not.toEqual("?");
  });
});
