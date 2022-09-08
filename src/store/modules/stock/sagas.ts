// Libs
import moment from "moment";
import { takeLatest, put, all, call } from "redux-saga/effects";

// API
import { api } from "~/services/api";

// Store
import {
  historyFailure,
  historyRequest,
  historySuccess,
  projectionRequest,
  projectionFailure,
  projectionSuccess,
  quoteFailure,
  quoteRequest,
  quoteSuccess,
} from "./slice";

// Types
import { ResponseGenerator } from "./types";

export function* getQuote({
  payload,
}: {
  payload: {
    name: string;
    renderMessage: (title: string, body: string) => void;
  };
}) {
  const {
    name,
    renderMessage,
  }: {
    name: string;
    renderMessage: (title: string, body: string) => void;
  } = payload;

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

    renderMessage("Error", err.response.data.message || "Please try again.");
  }
}

export function* getHistory({
  payload,
}: {
  payload: {
    name: string;
    startDate: string;
    endDate: string;
    renderMessage: (title: string, body: string) => void;
  };
}) {
  const {
    name,
    startDate,
    endDate,
    renderMessage,
  }: {
    name: string;
    startDate: string;
    endDate: string;
    renderMessage: (title: string, body: string) => void;
  } = payload;

  try {
    const start = moment(startDate, "DD/MM/yyyy");
    const end = moment(endDate, "DD/MM/yyyy");

    const startString = moment(start).format("yyyy-MM-DD");
    const endString = moment(end).format("yyyy-MM-DD");

    const response: ResponseGenerator = yield call(
      api.get,
      `stocks/${name}/history`,
      {
        params: {
          from: startString,
          to: endString,
        },
      }
    );

    const data = response.data;

    const prices = data.prices;

    const hightData: { x: Date; y: number }[] = [];
    const closingData: { x: Date; y: number }[] = [];
    const lowData: { x: Date; y: number }[] = [];

    for (const price of prices) {
      hightData.push({ x: new Date(price.pricedAt), y: price.high });
      closingData.push({ x: new Date(price.pricedAt), y: price.closing });
      lowData.push({ x: new Date(price.pricedAt), y: price.low });
    }

    yield put(
      historySuccess({
        history: {
          startDate: start.toDate(),
          endDate: end.toDate(),
          name: data.name,
          hightData: hightData.reverse(),
          closingData: closingData.reverse(),
          lowData: lowData.reverse(),
        },
      })
    );
  } catch (err: any) {
    yield put(historyFailure({}));

    renderMessage("Error", err.response.data.message || "Please try again.");
  }
}

export function* getStockProjection({
  payload,
}: {
  payload: {
    name: string;
    date: string;
    amount: number;
    renderMessage: (title: string, body: string) => void;
  };
}) {
  const {
    name,
    date,
    amount,
    renderMessage,
  }: {
    name: string;
    date: string;
    amount: number;
    renderMessage: (title: string, body: string) => void;
  } = payload;

  try {
    const purchasedAt = moment(date, "DD/MM/yyyy");
    const purchasedString = moment(purchasedAt).format("yyyy-MM-DD");

    const response: ResponseGenerator = yield call(
      api.get,
      `stocks/${name}/gains`,
      {
        params: {
          purchasedAmount: amount,
          purchasedAt: purchasedString,
        },
      }
    );

    const data = response.data;

    yield put(
      projectionSuccess({
        projection: {
          name: data.name,
          date: new Date(data.purchasedAt),
          amount: data.purchasedAmount,
          total: data.capitalGains,
          gain_lost: data.capitalGains - data.purchasedAmount,
        },
      })
    );
  } catch (err: any) {
    yield put(projectionFailure({}));

    renderMessage("Error", err.response.data.message || "Please try again.");
  }
}

export default all([
  takeLatest(quoteRequest, getQuote),
  takeLatest(historyRequest, getHistory),
  takeLatest(projectionRequest, getStockProjection),
]);
