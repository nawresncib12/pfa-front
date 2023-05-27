import Quizz from "./pages/quizz/quizz";
import Catalog from "./pages/catalog/Catalog"
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
        <Route
          path="/catalog"
          element={
            <Layout>
              <Catalog />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
