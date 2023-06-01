import Pill from "../Pill/Pill";
import Typography from "../Typography/Typography.styles";
import * as S from "./UserPreferences.style";
import { useTheme } from "styled-components";
import { useProfile } from "../../../hooks/useProfile";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter, splitCamelCase } from "../../../utils";

const UserPreferences = () => {
  const theme = useTheme();
  const { user } = useProfile();
  const navigate = useNavigate();
  console.log(user);

  const preferences = user?.preferences;

  const onClickUpdatePreferences = () => {
    navigate("/quizz");
  };

  if (!preferences) return null;

  return (
    <S.UserPreferencesContainer>
      {Object.entries(preferences).map(([key, value]) =>
        key === "id" ? null : (
          <S.UserPreferencesItem key={key}>
            <Typography.Subtitle fontSize="base" weight="semiBold" color={theme.colors.gray[600]}>
              {capitalizeFirstLetter(splitCamelCase(key))} :
            </Typography.Subtitle>
            {value.map((v) => (
              <Pill key={v} label={v} color={key == "excluded" ? "yellow" : "purple"} />
            ))}
          </S.UserPreferencesItem>
        )
      )}
      <Button onClick={onClickUpdatePreferences}>Update preferences</Button>
    </S.UserPreferencesContainer>
  );
};

export default UserPreferences;
