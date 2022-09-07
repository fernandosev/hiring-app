import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// @Types
import { IInitialState } from "./types";

const initialState = {
  loadingQuote: false,
  quote: undefined,
} as IInitialState;

const stock = createSlice({
  name: "stock",
  initialState,
  reducers: {
    quoteRequest(
      state,
      _action: PayloadAction<{
        name: string;
        renderMessage: (title: string, body: string) => void;
      }>
    ) {
      state.loadingQuote = true;
    },

    quoteSuccess(
      state,
      _action: PayloadAction<{
        quote: { name: string; lastPrice: number; pricedAt: Date };
      }>
    ) {
      state.quote = _action.payload.quote;
      state.loadingQuote = false;
    },

    quoteFailure(state, _action) {
      state.loadingQuote = false;
      state.quote = undefined;
    },
  },
});

export const { quoteRequest, quoteSuccess, quoteFailure } = stock.actions;
export default stock.reducer;
