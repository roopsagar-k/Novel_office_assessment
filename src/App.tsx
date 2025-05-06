import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import { ThemeProvder } from "./hooks/ThemeProvider";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvder>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvder>
    </BrowserRouter>
  );
}

export default App;
