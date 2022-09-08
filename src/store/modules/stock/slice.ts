import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// @Types
import { IInitialState } from "./types";

const initialState = {
  loadingQuote: false,
  loadingHistory: false,
  quote: undefined,
  history: undefined,
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

    historyRequest(
      state,
      _action: PayloadAction<{
        name: string;
        startDate: string;
        endDate: string;
        renderMessage: (title: string, body: string) => void;
      }>
    ) {
      state.loadingHistory = true;
    },

    historySuccess(
      state,
      _action: PayloadAction<{
        history: {
          name: string;
          startDate: Date;
          endDate: Date;
          hightData: { x: Date; y: number }[];
          closingData: { x: Date; y: number }[];
          lowData: { x: Date; y: number }[];
        };
      }>
    ) {
      state.history = _action.payload.history;
      state.loadingHistory = false;
    },

    historyFailure(state, _action) {
      state.loadingQuote = false;
      state.quote = undefined;
    },
  },
});

export const {
  quoteRequest,
  quoteSuccess,
  quoteFailure,
  historyRequest,
  historySuccess,
  historyFailure,
} = stock.actions;
export default stock.reducer;
