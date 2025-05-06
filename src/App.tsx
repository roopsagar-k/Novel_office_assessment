import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import { ThemeProvder } from "./context/ThemeProvider";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFound";
import ExchangeRatePage from "./pages/ExchangeRatePage";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvder>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/exchange-rate-live" element={<ExchangeRatePage />} />
          </Route>
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvder>
    </BrowserRouter>
  );
}

export default App;
