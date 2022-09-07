export interface IInitialState {
  loadingQuote: boolean;
  quote?: {
    name: string;
    lastPrice: number;
    pricedAt: Date;
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
