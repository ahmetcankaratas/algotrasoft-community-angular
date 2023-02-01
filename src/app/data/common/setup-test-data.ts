import { BacktestDetails } from '../../shared/models/backtest.model';
import { BACKTESTS } from 'server/data';

export function setupBacktest(): BacktestDetails {
  return BACKTESTS.backtests.results[1];
}
