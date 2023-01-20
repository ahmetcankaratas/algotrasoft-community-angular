export interface StockDetails {
  id: number;
  symbol: string;
  name: string;
  return_yearly_1: number;
}

export interface MarketResponse {
  stocks: StockDetails[];
}
