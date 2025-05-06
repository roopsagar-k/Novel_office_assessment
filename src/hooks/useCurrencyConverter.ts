import { useState, useEffect } from "react";
import { currencies } from "../utils/data";
import axiosInstance from "../utils/axiosInstance";

interface UseCurrencyConverterProps {
  baseCurrency: string;
  targetCurrency: string;
  emiAmount: number;
}

const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

const useCurrencyConverter = ({
  baseCurrency,
  targetCurrency,
  emiAmount,
}: UseCurrencyConverterProps) => {
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(
    {}
  );
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [amount, setAmount] = useState<number>(emiAmount);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const fetchExchangeRates = async () => {
    setLoading(true);
    setError("");

    try {
      const { data } = await axiosInstance.get(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`
      );
      console.log("data from exchange rates", data);
      setExchangeRates(data.conversion_rates);
      setLastUpdated(new Date().toLocaleString());

      if (data.conversion_rates[targetCurrency]) {
        const converted = amount * data.conversion_rates[targetCurrency];
        setConvertedAmount(converted);
      }
    } catch (err) {
      console.error("Error fetching exchange rates:", err);
      setError("Failed to fetch exchange rates. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, [baseCurrency, targetCurrency]);

  useEffect(() => {
    setAmount(emiAmount);
  }, [emiAmount]);

  useEffect(() => {
    if (exchangeRates[targetCurrency]) {
      setConvertedAmount(amount * exchangeRates[targetCurrency]);
    }
  }, [amount, exchangeRates, targetCurrency]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const getCurrencySymbol = (code: string) =>
    currencies.find((c) => c.code === code)?.symbol || code;

  return {
    amount,
    setAmount,
    handleAmountChange,
    convertedAmount,
    loading,
    error,
    lastUpdated,
    getCurrencySymbol,
    fetchExchangeRates,
    exchangeRates
  };
};

export default useCurrencyConverter;
