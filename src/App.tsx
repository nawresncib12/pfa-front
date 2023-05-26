import { IntlProvider } from "react-intl";
import Quizz from "./pages/quizz/quizz";
import { useLocale } from "./lang/useLocale";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { locale, messages } = useLocale();

  return (
    <BrowserRouter>
      <IntlProvider locale={locale} messages={messages}>
        <Routes>
          <Route path="/quizz" element={<Quizz />} />
        </Routes>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
