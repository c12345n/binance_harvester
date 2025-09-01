export interface CryptoData {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  macd: number;
  macd1226: number;
  macd_diff: number;
  macd_diff1020: number;
  macd_diff2550: number;
  macd_diff50100: number;
  stoch: number;
  stochrsi: number;
  rsi: number;
  sma: number;
  ema: number;
  chaikin_money_flow: number;
  mfi: number;
  trix: number;
  tema: number;
}

export interface TopCrypto {
  crypto: string;
  change: number;
  price?: number;
  volume24h?: number;
}

export interface CandlestickData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}