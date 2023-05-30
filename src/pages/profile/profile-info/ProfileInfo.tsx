import * as S from "./ProfileInfo.styles";

const ProfileInfo = () => {
  return (
    <div>
      <S.ProfileTitle>Profile Info</S.ProfileTitle>
      <S.ProfileInfo>
        <S.ProfileInfoTitle>Name</S.ProfileInfoTitle>
        <S.ProfileInfoContent>Taher</S.ProfileInfoContent>
      </S.ProfileInfo>
      <S.ProfileInfo>
        <S.ProfileInfoTitle>Email</S.ProfileInfoTitle>
        <S.ProfileInfoContent>taher@gmail.com</S.ProfileInfoContent>
      </S.ProfileInfo>
    </div>
  );
};

export default ProfileInfo;
