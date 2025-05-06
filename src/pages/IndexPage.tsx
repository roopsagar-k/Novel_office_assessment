import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { TextField, Button } from "@mui/material";
import AmortizationTable from "../components/Table";

const IndexPage = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [term, setTerm] = useState(5);

  const [calculatedLoan, setCalculatedLoan] = useState(loanAmount);
  const [calculatedInterest, setCalculatedInterest] = useState(interestRate);
  const [calculatedTerm, setCalculatedTerm] = useState(term);

  const handleCalculate = () => {
    setCalculatedLoan(loanAmount);
    setCalculatedInterest(interestRate);
    setCalculatedTerm(term);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Calculate Your Loan</h2>
          <div className="flex flex-wrap gap-4">
            <TextField
              required
              label="Loan amount"
              variant="outlined"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
            <TextField
              required
              label="Interest rate (%)"
              variant="outlined"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
            <TextField
              required
              label="Term (years)"
              variant="outlined"
              type="number"
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
            />
          </div>
          <Button
            sx={{ marginY: "15px" }}
            variant="contained"
            onClick={handleCalculate}
          >
            Calculate
          </Button>
        </div>

        <div className="my-10">
          <AmortizationTable
            loanAmount={calculatedLoan}
            intrest={calculatedInterest}
            term={calculatedTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
