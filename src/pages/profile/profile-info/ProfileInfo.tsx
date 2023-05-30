import { useAuth } from "../../../auth/AuthContext";
import * as S from "./ProfileInfo.styles";

const ProfileInfo = () => {
  const { user } = useAuth();
  if (user === null) return null;
  return (
    <div>
      <S.ProfileTitle>Profile Info</S.ProfileTitle>
      <S.ProfileInfo>
        <S.ProfileInfoTitle>Name</S.ProfileInfoTitle>
        <S.ProfileInfoContent>{user.name}</S.ProfileInfoContent>
      </S.ProfileInfo>
      <S.ProfileInfo>
        <S.ProfileInfoTitle>Email</S.ProfileInfoTitle>
        <S.ProfileInfoContent>{user.email}</S.ProfileInfoContent>
      </S.ProfileInfo>
    </div>
  );
};

export default ProfileInfo;
