import axios from "axios";
import { useEffect } from "react";
import { Preferences, useAuth, User } from "../auth/AuthContext";
import { Recipe, SearchRecipeDto } from "../pages/recipe/types";

export const API_URL = "http://localhost:3000";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
function useApi() {
  const { token, login, setUser } = useAuth();

  useEffect(() => {
    console.log("token", token);
    if (token) api.defaults.headers.common.Authorization = `Bearer ${token}`;
    else delete api.defaults.headers.common.Authorization;
  }, [token]);

  const updatePreferences = async (preferences: Preferences) => {
    await api.post<UpdatePreferencesResponse>("/preferences", preferences);
  };

  const loginWithEmail = async (email: string, password: string) => {
    const { data } = await api.post<LoginWithEmailResponse>("/auth/login", {
      email,
      password
    });
    login(data.accessToken);
  };

  const register = async (registerData: { email: string; password: string; name: string }) => {
    await api.post("/auth/signup", registerData);
  };

  const getRecipe = async (id: string) => {
    const { data } = await api.get<RecipeResponse>(`/recipes/recipe/${id}`);
    return data;
  };

  const likeRecipe = async (id: string) => {
    const res = await api.post<LikeRecipeResponse>(`/recipes/like?id=${id}`);
    setUser(res.data);
    return res.data;
  };
  const saveRecipe = async (id: string) => {
    const res = await api.post<LikeRecipeResponse>(`/recipes/save?id=${id}`);
    setUser(res.data);
    return res.data;
  };
  const unlikeRecipe = async (id: string) => {
    const res = await api.post<LikeRecipeResponse>(`/recipes/unlike?id=${id}`);
    setUser(res.data);
    return res.data;
  };
  const unsaveRecipe = async (id: string) => {
    const res = await api.post<LikeRecipeResponse>(`/recipes/unsave?id=${id}`);
    setUser(res.data);
    return res.data;
  };

  const searchRecipes = async (searchRecipeDto: SearchRecipeDto) => {
    const { data } = await api.post<SearchRecipeResponse>("/recipes/search", searchRecipeDto);
    return data;
  };

  return {
    updatePreferences,
    loginWithEmail,
    register,
    getRecipe,
    likeRecipe,
    saveRecipe,
    unlikeRecipe,
    unsaveRecipe,
    searchRecipes
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

export type RecipeResponse = Recipe;

export type LikeRecipeResponse = User;
