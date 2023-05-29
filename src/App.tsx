import Quizz from "./pages/quizz/quizz";
import Catalog from "./pages/catalog/Catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/atoms/Layout/Layout";
import Recipes from "./pages/recipes/recipes";
import RecipePage from "./pages/recipe/RecipePage";
import Header from "./components/molecules/Header/Header";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
            path="/auth/register"
            element={
              <Layout>
                <Signup />
              </Layout>
            }
          />
          <Route
            path="/auth/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/quizz"
            element={
              // <ProtectedRoute>
              <Layout>
                <Quizz />
              </Layout>
              // </ProtectedRoute>
            }
          />
          <Route
            path="/catalog"
            element={
              <div>
                <Header />
                <Catalog />
              </div>
            }></Route>
          <Route
            path="/recipes"
            element={
              <Layout>
                <Recipes />
              </Layout>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
