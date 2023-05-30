import axios from "axios";
import { useEffect } from "react";
import { Preferences, useAuth, User } from "../auth/AuthContext";
import { Recipe } from "../pages/recipe/types";

export const API_URL = "http://localhost:3000";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
function useApi() {
  const { token, login } = useAuth();

  useEffect(() => {
    console.log("token", token);
    if (token) api.defaults.headers.common.Authorization = `Bearer ${token}`;
    else delete api.defaults.headers.common.Authorization;
  }, [token]);

  const updatePreferences = async (preferences: Preferences) => {
    await api.post<UpdatePreferencesResponse>("/preferences", preferences);
  };

  const searchRecipe = async (ingredients: string[]) => {
    const { data } = await api.post<SearchRecipeResponse>("/recipes/search", {
      q: ingredients.join(",")
    });
    return data;
  };

  const loginWithEmail = async (email: string, password: string) => {
    const { data } = await api.post<LoginWithEmailResponse>("/auth/login", {
      email,
      password
    });
    login(data.accessToken);
  };

  const register = async (registerData: { email: string; password: string; name: string }) => {
    await api.post("/auth/register", registerData);
  };

  return {
    updatePreferences,
    searchRecipe,
    loginWithEmail,
    register
  };
}

export default useApi;

type SearchRecipeResponse = {
  hits: Recipe[];
};

type LoginWithEmailResponse = {
  accessToken: string;
};

type UpdatePreferencesResponse = User;
