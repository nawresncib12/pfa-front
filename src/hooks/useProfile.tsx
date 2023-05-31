import { createContext, useContext, useState } from "react";
import { RecipeEntity } from "../pages/recipe/types";

export type Preferences = {
  mealTypes: string[];
  cuisineTypes: string[];
  dietLabels: string[];
  excluded: string[];
};
// Define the shape of your user object
export type User = {
  id: string;
  name: string;
  email: string;

  preferences?: Preferences;
  likedRecipes?: RecipeEntity[];
  recipes?: RecipeEntity[];
  // Add other user properties as needed
};

export function useProfileInternal() {
  const [user, setUser] = useState<User | null>(null);

  return {
    user,
    setUser
  };
}

export const ProfileContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
}>({ user: null, setUser: () => null });

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, setUser } = useProfileInternal();

  return <ProfileContext.Provider value={{ user, setUser }}>{children}</ProfileContext.Provider>;
};

export const useProfile = () => {
  const { user, setUser } = useContext(ProfileContext);

  return {
    user,
    setUser
  };
};
