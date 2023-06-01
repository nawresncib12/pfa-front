import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import useApi from "../api/useApi";
import { RecipeEntity, SearchRecipeDto } from "../pages/recipe/types";
import { Preferences, useProfile } from "./useProfile";

export function useSearchInternal() {
  const { user } = useProfile();
  const { searchRecipes } = useApi();
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<RecipeEntity[]>([]);
  const [preferences, setPreferences] = useState<Preferences>(
    user?.preferences || {
      mealTypes: [],
      cuisineTypes: [],
      dietLabels: [],
      excluded: []
    }
  );
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const search = async () => {
    if (ingredients.length === 0) {
      return;
    }
    setLoading(true);
    try {
      const searchRecipeDto: SearchRecipeDto = {
        q: ingredients.join(","),
        mealType: preferences.mealTypes,
        cuisineType: preferences.cuisineTypes,
        diet: preferences.dietLabels,
        excluded: preferences.excluded
      };
      const searchRecipesResponse = await searchRecipes(searchRecipeDto);
      if (searchRecipesResponse) {
        console.log(searchRecipesResponse);
        setSearchResults(searchRecipesResponse.data.recipes);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.preferences) {
      setPreferences(user.preferences);
    }
  }, [user?.preferences]);

  return {
    ingredients,
    setIngredients,
    searchResults,
    setSearchResults,
    preferences,
    setPreferences,
    imageFile,
    setImageFile,
    loading,
    search
  };
}

type SearchContextType = {
  ingredients: string[];
  setIngredients: Dispatch<SetStateAction<string[]>>;
  searchResults: RecipeEntity[];
  setSearchResults: Dispatch<SetStateAction<RecipeEntity[]>>;
  preferences: Preferences;
  setPreferences: Dispatch<SetStateAction<Preferences>>;
  imageFile: File | null;
  setImageFile: Dispatch<SetStateAction<File | null>>;
  loading?: boolean;
  search: () => Promise<void>;
};

export const SearchContext = createContext<SearchContextType>({
  ingredients: [],
  setIngredients: () => null,
  searchResults: [],
  setSearchResults: () => null,
  preferences: {
    mealTypes: [],
    cuisineTypes: [],
    dietLabels: [],
    excluded: []
  },
  setPreferences: () => null,
  imageFile: null,
  setImageFile: () => null,
  loading: false,
  search: () => Promise.resolve()
});

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    ingredients,
    setIngredients,
    searchResults,
    setSearchResults,
    preferences,
    setPreferences,
    imageFile,
    setImageFile,
    loading,
    search
  } = useSearchInternal();

  return (
    <SearchContext.Provider
      value={{
        ingredients,
        setIngredients,
        searchResults,
        setSearchResults,
        preferences,
        setPreferences,
        imageFile,
        setImageFile,
        loading,
        search
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const {
    ingredients,
    setIngredients,
    searchResults,
    setSearchResults,
    preferences,
    setPreferences,
    imageFile,
    setImageFile,
    loading,
    search
  } = useContext(SearchContext);

  return {
    ingredients,
    setIngredients,
    searchResults,
    setSearchResults,
    preferences,
    setPreferences,
    imageFile,
    setImageFile,
    loading,
    search
  };
};
