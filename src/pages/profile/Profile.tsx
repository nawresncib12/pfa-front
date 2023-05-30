import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { User } from "../../auth/AuthContext";
import { RecipeEntity } from "../recipe/types";
import * as S from "./Profile.styles";

export const mockRecipeEntity: RecipeEntity = {
  id: "1",
  label: "Chicken Vesuvio",
  dietLabels: ["Low-Carb"],
  mealType: ["Dinner"],
  dishType: ["Chicken"]
};
export const mockUser: User = {
  id: "1",
  name: "Taher",
  email: "taher@gmail.com",
  preferences: undefined,
  savedRecipes: [mockRecipeEntity],
  likedRecipes: [mockRecipeEntity]
};
const Profile = () => {
  const theme = useTheme();
  // const { user } = useAuth();
  const user = mockUser;
  const navigate = useNavigate();

  return (
    <S.ProfileContainer>
      <S.ProfileCard backgroundColor={theme.colors.primary[500]}>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
      </S.ProfileCard>

      <S.ProfileCard
        onClick={() => navigate("/profile/liked")}
        backgroundColor={theme.colors.pastels.darkPink}
      >
        <h1>{user.likedRecipes?.length ?? 0}</h1>
        <h1>Liked Recipes</h1>
      </S.ProfileCard>

      <S.ProfileCard
        onClick={() => navigate("/profile/saved")}
        backgroundColor={theme.colors.pastels.darkYellow}
      >
        <h1>{user.savedRecipes?.length ?? 0}</h1>
        <h1>Saved Recipes</h1>
      </S.ProfileCard>

      <S.ProfileCard backgroundColor={theme.colors.pastels.darkOrange}>
        <h1>Preferences</h1>
      </S.ProfileCard>
    </S.ProfileContainer>
  );
};

export default Profile;
