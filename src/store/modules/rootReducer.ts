import { combineReducers } from "@reduxjs/toolkit";

import stock from "./stock/slice";

const rootReducer = combineReducers({
  stock,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
