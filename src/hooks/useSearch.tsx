import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { RecipeEntity } from "../pages/recipe/types";
import { Preferences, useProfile } from "./useProfile";

export function useSearchInternal() {
  const { user } = useProfile();
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
    setImageFile
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
  setImageFile: () => null
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
    setImageFile
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
        setImageFile
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
    setImageFile
  } = useContext(SearchContext);

  return {
    ingredients,
    setIngredients,
    searchResults,
    setSearchResults,
    preferences,
    setPreferences,
    imageFile,
    setImageFile
  };
};
