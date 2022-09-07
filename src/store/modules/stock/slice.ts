import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// @Types
import { IInitialState } from "./types";

const initialState = {
  loading: false,
} as IInitialState;

const stock = createSlice({
  name: "stock",
  initialState,
  reducers: {
    test(
      state,
      _action: PayloadAction<{
        loading: boolean;
      }>
    ) {
      state.loading = _action.payload.loading;
    },
  },
});

export const { test } = stock.actions;
export default stock.reducer;
