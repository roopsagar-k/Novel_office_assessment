import { ThemeContext } from "../context/ThemeProvider";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within the ThemeProvder");
  }
  return context;
};
