import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// @Types
import { IInitialState } from "./types";

const initialState = {
  loadingQuote: false,
  loadingHistory: false,
  loadingProjection: false,
  quote: undefined,
  history: undefined,
  projection: undefined,
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
      state.quote = undefined;
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
      state.history = undefined;
      state.loadingHistory = true;
    },

    historySuccess(
      state,
      _action: PayloadAction<{
        history: {
          minValue: number;
          maxValue: number;
          name: string;
          startDate: Date;
          endDate: Date;
          hightData: { x: Date; y: number; price: number }[];
          closingData: { x: Date; y: number; price: number }[];
          lowData: { x: Date; y: number; price: number }[];
        };
      }>
    ) {
      state.history = _action.payload.history;
      state.loadingHistory = false;
    },

    historyFailure(state, _action) {
      state.loadingHistory = false;
      state.quote = undefined;
    },

    projectionRequest(
      state,
      _action: PayloadAction<{
        name: string;
        date: string;
        amount: number;
        renderMessage: (title: string, body: string) => void;
      }>
    ) {
      state.projection = undefined;
      state.loadingProjection = true;
    },

    projectionSuccess(
      state,
      _action: PayloadAction<{
        projection: {
          name: string;
          date: Date;
          amount: number;
          total: number;
          gain_lost: number;
        };
      }>
    ) {
      state.projection = _action.payload.projection;
      state.loadingProjection = false;
    },

    projectionFailure(state, _action) {
      state.loadingProjection = false;
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
  projectionRequest,
  projectionSuccess,
  projectionFailure,
} = stock.actions;
export default stock.reducer;
