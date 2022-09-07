import { all } from "typed-redux-saga";

import stock from "./stock/sagas";

export default function* rootReducer() {
  return yield* all([stock]);
}
