import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CurrencySelector from "./CurrencySelector";
import { Button } from "@mui/material";

interface ITable {
  loanAmount: number;
  intrest: number;
  term: number;
}

interface AmortizationRow {
  month: number;
  principal: number;
  intrest: number;
  reminingBalance: number;
}

function calculateEMI(P: number, annualRate: number, T: number) {
  const R = annualRate / 12 / 100;
  const N = T * 12;
  const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  return emi;
}

function generateSchedule(
  P: number,
  annualRate: number,
  T: number
): AmortizationRow[] {
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
}

export default function AmortizationTable({
  loanAmount,
  intrest,
  term,
}: ITable) {
  const [currency, setCurrency] = useState<string>("USD");
  const [emi, setEmi] = useState(calculateEMI(loanAmount, intrest, term));
  const [rows, setRows] = useState<AmortizationRow[]>([]);

  useEffect(() => {
    setEmi(calculateEMI(loanAmount, intrest, term));
    const schedule = generateSchedule(loanAmount, intrest, term);
    setRows(schedule);
  }, [loanAmount, intrest, term]);

  return (
    <div>
      <div className="my-4">
        <h2 className="text-xl font-semibold my-4 px-2">
          EMI: {emi.toFixed(2)} {currency}
        </h2>
        <div className="flex justify-between items-center">
          <CurrencySelector currency={currency} setCurrency={setCurrency} />
          <Button size="small" variant="outlined" onClick={() => setRows([])}>
            Reset
          </Button>
        </div>
      </div>
      <TableContainer
        sx={{
          maxHeight: 500,
          overflowY: "auto",
        }}
        component={Paper}
      >
        <Table
          sx={{
            minWidth: 650,
          }}
          aria-label="amortization table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell align="right">Principal</TableCell>
              <TableCell align="right">Interest</TableCell>
              <TableCell align="right">Remaining Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.month}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.month}
                </TableCell>
                <TableCell align="right">
                  {row.principal} {currency}
                </TableCell>
                <TableCell align="right">
                  {row.intrest} {currency}
                </TableCell>
                <TableCell align="right">
                  {row.reminingBalance} {currency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
