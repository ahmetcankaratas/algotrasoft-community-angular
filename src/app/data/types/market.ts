export type MarketResponseResult = {
  id: number;
  symbol: string;
  name: string;
  return_yearly_1: number;
};

export type MarketResponse = {
  stocks: MarketResponseResult[];
};
