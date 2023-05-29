import Quizz from "./pages/quizz/quizz";
import Catalog from "./pages/catalog/Catalog"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/atoms/Layout/Layout";
import Recipes from "./pages/recipes/recipes";
import RecipePage from "./pages/recipe/RecipePage";
import Header from "./components/molecules/Header/Header";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/recipe/:id"
          element={
            <Layout>
              <RecipePage />
            </Layout>
          }
        />
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
            <div>
            <Header/>
              <Catalog />
              </div>
          }
          ></Route>
        <Route
          path="/recipes"
          element={
            <Layout>
              <Recipes />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
