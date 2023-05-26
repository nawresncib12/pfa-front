import Quizz from "./pages/quizz/quizz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/atoms/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/quizz"
          element={
            <Layout>
              <Quizz />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
