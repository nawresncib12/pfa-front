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
import Home from "./pages/home/home";

import Profile from "./pages/profile/Profile";
import SavedRecipes from "./pages/profile/saved/SavedRecipes";
import LikedRecipes from "./pages/profile/liked/LikedRecipes";
import ProfileInfo from "./pages/profile/profile-info/ProfileInfo";

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
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          >
            <Route path="" element={<ProfileInfo />} />
            <Route path="saved" element={<SavedRecipes />} />
            <Route path="liked" element={<LikedRecipes />} />
          </Route>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
