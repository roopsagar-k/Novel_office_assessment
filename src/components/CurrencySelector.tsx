import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import type { SelectChangeEvent } from "@mui/material/Select";

export default function CurrencySelector({
  currency,
  setCurrency,
}: {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="currency-selector-label">Currency</InputLabel>
      <Select
        labelId="currency-selector-label"
        id="currency-selector"
        value={currency}
        label="Currency"
        onChange={handleChange}
      >
        <MenuItem value="USD">USD</MenuItem>
        <MenuItem value="EUR">EUR</MenuItem>
        <MenuItem value="INR">INR</MenuItem>
      </Select>
    </FormControl>
  );
}
