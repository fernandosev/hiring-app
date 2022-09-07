// Libs
import { takeLatest, put, all } from "redux-saga/effects";

// Store
import { test } from "./slice";

export function* testRequest() {
  try {
    console.log("test sagas");
  } catch (err: any) {
    console.log(err);
  }
}

export default all([takeLatest(test, testRequest)]);
