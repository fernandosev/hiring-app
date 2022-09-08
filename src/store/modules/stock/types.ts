export interface IInitialState {
  loadingQuote: boolean;
  loadingHistory: boolean;
  loadingProjection: boolean;
  quote?: {
    name: string;
    lastPrice: number;
    pricedAt: Date;
  };
  history?: {
    minValue: number;
    maxValue: number;
    name: string;
    startDate: Date;
    endDate: Date;
    hightData: { x: Date; y: number; price: number }[];
    closingData: { x: Date; y: number; price: number }[];
    lowData: { x: Date; y: number; price: number }[];
  };
  projection?: {
    name: string;
    date: Date;
    amount: number;
    total: number;
    gain_lost: number;
  };
}

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
