import { useMemo } from "react";
import type { AmortizationRow } from "../types";

export function useAmortizationSchedule() {

  const calculateEMI = (P: number, annualRate: number, T: number) => {
    const R = annualRate / 12 / 100;
    const N = T * 12;
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return emi;
  };

  const generateSchedule = (
    P: number,
    annualRate: number,
    T: number
  ): AmortizationRow[] => {
    const R = annualRate / 12 / 100;
    const N = T * 12;
    const emi = calculateEMI(P, annualRate, T);
    let balance = P;

    const schedule: AmortizationRow[] = [];

    for (let month = 1; month <= N; month++) {
      const interestForMonth = balance * R;
      const principalForMonth = emi - interestForMonth;
      balance -= principalForMonth;

      schedule.push({
        month,
        principal: parseFloat(principalForMonth.toFixed(2)),
        intrest: parseFloat(interestForMonth.toFixed(2)),
        reminingBalance: parseFloat(Math.max(balance, 0).toFixed(2)),
      });
    }

    return schedule;
  };

  return {
    calculateEMI,
    generateSchedule,
  };
}
