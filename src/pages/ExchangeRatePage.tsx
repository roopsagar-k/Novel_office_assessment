import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
  CircularProgress,
  Divider,
  Card,
  CardContent,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Refresh, Info, CurrencyExchange } from "@mui/icons-material";
import { currencies } from "../utils/data";
import useCurrencyConverter from "../hooks/useCurrencyConverter";

interface ExchangeRatePageProps {
  emiAmount?: number;
}

export default function ExchangeRatePage({
  emiAmount = 1000,
}: ExchangeRatePageProps) {
  const [baseCurrency, setBaseCurrency] = useState("INR");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const {
    amount,
    handleAmountChange,
    convertedAmount,
    loading,
    error,
    lastUpdated,
    getCurrencySymbol,
    exchangeRates,
    fetchExchangeRates,
  } = useCurrencyConverter({ baseCurrency, targetCurrency, emiAmount });

  return (
    <Box sx={{ p: 3, maxWidth: 1300, mx: "auto" }}>
      {/* Main Converter */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Box display="flex" alignItems="center" mb={3}>
          <CurrencyExchange
            sx={{
              fontSize: { xs: 28, sm: 32, md: 36 },
              mr: 2,
              color: "primary.main",
            }}
          />
          <Typography
            sx={{
              fontSize: {
                xs: "1.5rem", 
                sm: "2rem", 
                md: "2.5rem", 
              },
              fontWeight: 500,
            }}
          >
            EMI Currency Converter
          </Typography>
        </Box>

        <Typography variant="body1" color="text.secondary" paragraph>
          Convert your loan EMI amount to different currencies using real-time
          exchange rates.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <div className="w-full grid md:grid-cols-2 gap-x-4">
          <Card variant="outlined" sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Your EMI Amount
              </Typography>

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="base-currency-label">Base Currency</InputLabel>
                <Select
                  labelId="base-currency-label"
                  value={baseCurrency}
                  label="Base Currency"
                  onChange={(e) => setBaseCurrency(e.target.value)}
                >
                  {currencies.map((c) => (
                    <MenuItem key={c.code} value={c.code}>
                      {c.code} - {c.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                label="EMI Amount"
                type="number"
                fullWidth
                value={amount}
                onChange={handleAmountChange}
                InputProps={{
                  startAdornment: (
                    <Typography sx={{ mr: 1 }}>
                      {getCurrencySymbol(baseCurrency)}
                    </Typography>
                  ),
                }}
              />
            </CardContent>
          </Card>

          <Card variant="outlined" sx={{ height: "100%" }}>
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography variant="h6">Converted Amount</Typography>
                <Tooltip title="Refresh exchange rates">
                  <IconButton onClick={fetchExchangeRates} disabled={loading}>
                    <Refresh />
                  </IconButton>
                </Tooltip>
              </Box>

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="target-currency-label">
                  Target Currency
                </InputLabel>
                <Select
                  labelId="target-currency-label"
                  value={targetCurrency}
                  label="Target Currency"
                  onChange={(e) => setTargetCurrency(e.target.value)}
                >
                  {currencies.map((c) => (
                    <MenuItem key={c.code} value={c.code}>
                      {c.code} - {c.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {loading ? (
                <Box display="flex" justifyContent="center" my={3}>
                  <CircularProgress />
                </Box>
              ) : error ? (
                <Typography color="error" sx={{ my: 2 }}>
                  {error}
                </Typography>
              ) : (
                <Box textAlign="center" py={2}>
                  <Typography variant="h4" color="primary" gutterBottom>
                    {getCurrencySymbol(targetCurrency)}{" "}
                    {convertedAmount.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    1 {baseCurrency} ={" "}
                    {exchangeRates[targetCurrency]?.toFixed(4) || "..."}{" "}
                    {targetCurrency}
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </div>
        {lastUpdated && (
          <Box display="flex" alignItems="center" mt={2}>
            <Info fontSize="small" sx={{ mr: 1, color: "text.secondary" }} />
            <Typography variant="caption" color="text.secondary">
              Rates last updated: {lastUpdated}
            </Typography>
          </Box>
        )}
      </Paper>

      {/* Popular Conversions */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Popular Currency Conversions
        </Typography>

        <div className="flex flex-col md:flex-row gap-4">
          {["USD", "EUR", "GBP", "JPY"].map((code) => (
            <Grid key={code}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle2" gutterBottom>
                    {baseCurrency} to {code}
                  </Typography>

                  {loading ? (
                    <CircularProgress size={20} />
                  ) : (
                    <Typography variant="h6">
                      {getCurrencySymbol(baseCurrency)} 1 ={" "}
                      {exchangeRates[code]?.toFixed(4) || "N/A"} {code}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </div>
      </Paper>
    </Box>
  );
}
