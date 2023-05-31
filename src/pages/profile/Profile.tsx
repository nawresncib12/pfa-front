import { Outlet, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { User } from "../../hooks/useProfile";
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
  recipes: [mockRecipeEntity],
  likedRecipes: [mockRecipeEntity]
};
const Profile = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div>
      <S.ProfileTabs>
        <S.ProfileCard
          onClick={() => navigate("/profile")}
          backgroundColor={theme.colors.primary[500]}
        >
          <p>Profile</p>
        </S.ProfileCard>

        <S.ProfileCard
          onClick={() => navigate("/profile/liked")}
          backgroundColor={theme.colors.pastels.darkPink}
        >
          <p>Liked</p>
        </S.ProfileCard>

        <S.ProfileCard
          onClick={() => navigate("/profile/saved")}
          backgroundColor={theme.colors.pastels.darkYellow}
        >
          <p>Saved</p>
        </S.ProfileCard>

        <S.ProfileCard
          backgroundColor={theme.colors.pastels.darkOrange}
          onClick={() => navigate("/profile/preferences")}
        >
          <p>Preferences</p>
        </S.ProfileCard>
      </S.ProfileTabs>
      <S.ProfileContent>
        <Outlet />
      </S.ProfileContent>
    </div>
  );
};

export default Profile;
