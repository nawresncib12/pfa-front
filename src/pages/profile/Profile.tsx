import { useTheme } from "styled-components";
import { User } from "../../auth/AuthContext";
import * as S from "./Profile.styles";

const mockUser: User = {
  id: "1",
  name: "Taher",
  email: "taher@gmail.com",
  preferences: undefined,
  savedRecipes: [],
  likedRecipes: []
};
const Profile = () => {
  const theme = useTheme();
  const user = mockUser;

  return (
    <S.ProfileContainer>
      <S.ProfileCard backgroundColor={theme.colors.primary[500]}>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
      </S.ProfileCard>

      <S.ProfileCard backgroundColor={theme.colors.pastels.darkPink}>
        <h1>{user.likedRecipes?.length ?? 0}</h1>
        <h1>Liked Recipes</h1>
      </S.ProfileCard>

      <S.ProfileCard backgroundColor={theme.colors.pastels.darkYellow}>
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
