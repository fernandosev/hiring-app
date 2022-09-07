// Libs
import { API_BASE_URL } from "@env";
import { takeLatest, put, all, call } from "redux-saga/effects";

// API
import { api } from "~/services/api";

// Store
import { quoteFailure, quoteRequest, quoteSuccess } from "./slice";

// Types
import { ResponseGenerator } from "./types";

export function* getQuote({
  payload,
}: {
  payload: {
    name: string;
  };
}) {
  const {
    name,
  }: {
    name: string;
  } = payload;

  console.log(API_BASE_URL);

  try {
    const response: ResponseGenerator = yield call(
      api.get,
      `stock/${name}/quote`
    );

    const data = response.data;

    yield put(
      quoteSuccess({
        quote: {
          name: data.name,
          lastPrice: data.lastPrice,
          pricedAt: new Date(data.pricedAt),
        },
      })
    );
  } catch (err: any) {
    yield put(quoteFailure({}));
    console.log(err);
  }
}

export default all([takeLatest(quoteRequest, getQuote)]);
