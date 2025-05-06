export interface AmortizationRow {
  month: number;
  principal: number;
  intrest: number;
  reminingBalance: number;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}