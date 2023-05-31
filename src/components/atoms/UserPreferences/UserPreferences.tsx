import { capitalize } from "lodash";
import Pill from "../Pill/Pill";
import Typography from "../Typography/Typography.styles";
import * as S from "./UserPreferences.style";
import { useTheme } from "styled-components";

const mockPref = {
  cuisine: ["French", "Tunisian"],
  meals: ["Breakfast"],
  allergies: ["Diary"],
  dishes: ["soup", "salad"]
};

const UserPreferences = () => {
  const theme = useTheme();
  return (
    <S.UserPreferencesContainer>
      {Object.entries(mockPref).map(([key, value]) => (
        <S.UserPreferencesItem key={key}>
          <Typography.Subtitle fontSize="base" weight="semiBold" color={theme.colors.gray[600]}>
            {capitalize(key)} :
          </Typography.Subtitle>
          {value.map((v) => (
            <Pill key={v} label={v} color={key == "allergies" ? "yellow" : "purple"} />
          ))}
        </S.UserPreferencesItem>
      ))}
    </S.UserPreferencesContainer>
  );
};

export default UserPreferences;
