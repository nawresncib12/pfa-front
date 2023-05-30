import { useTheme } from "styled-components";
import * as S from "./Profile.styles";

const Profile = () => {
  const theme = useTheme();
  return (
    <S.ProfileContainer>
      <S.ProfileCard backgroundColor={theme.colors.primary[500]}>
        <h1>Profile</h1>
      </S.ProfileCard>
    </S.ProfileContainer>
  );
};

export default Profile;
