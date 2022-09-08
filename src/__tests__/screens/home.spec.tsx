import React from "react";
import Home from "~/screens/Home";

import { renderWithProviders } from "~/utils/test-utils";

describe("Home Screen", () => {
  test("if the screen don't cards if quote state is undefined", () => {
    const { getByTestId, debug } = renderWithProviders(<Home />, {
      preloadedState: {
        stock: {
          loadingQuote: false,
          loadingStocksToCompare: false,
          stocksToCompare: undefined,
          quote: undefined,
        },
      },
    });

    expect(() => getByTestId("stockCard")).toThrow();
  });
});

describe("Home Screen", () => {
  test("if the screen shows the card stock on Redux", () => {
    const quote = { name: "META", lastPrice: 125.65, pricedAt: new Date() };

    const { getByText, debug } = renderWithProviders(<Home />, {
      preloadedState: {
        stock: {
          loadingQuote: false,
          loadingStocksToCompare: false,
          stocksToCompare: undefined,
          quote,
        },
      },
    });

    expect(() => getByText("META")).toBeTruthy();
    expect(() => getByText("125.65")).toBeTruthy();
  });
});
