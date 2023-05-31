import { Dispatch, SetStateAction } from "react";
import * as S from "./PreferencesStep.style";
import Input from "../../../atoms/Input/Input";
import Typography from "../../../atoms/Typography/Typography.styles";
import UserPreferences from "../../../atoms/UserPreferences/UserPreferences";
import { useTheme } from "styled-components";
import Pill from "../../../atoms/Pill/Pill";

type PreferencesStepProps = {
  maxCount: number;
  ingredientCount: number;
  setIngredientCount: Dispatch<SetStateAction<number>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  ingredients: string[];
};

const PreferencesStep = ({
  maxCount,
  error,
  setError,
  ingredientCount,
  setIngredientCount,
  ingredients
}: PreferencesStepProps) => {
  const theme = useTheme();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setIngredientCount(value);
    if (value < 0 || value > maxCount) {
      setError("Invalid ingredient count");
    } else {
      setError("");
    }
  };
  return (
    <S.PreferencesStepContainer>
      <S.PreferencesItem>
        <Typography.Subtitle fontSize="lg" weight="semiBold" color={theme.colors.gray[600]}>
          Ingredient count :
        </Typography.Subtitle>
        <Typography.Base fontSize="base" weight="semiBold" color={theme.colors.gray[600]}>
          How many ingredients do you want us to use from the ones you provided?
        </Typography.Base>
        <Input
          value={ingredientCount}
          onChange={onChange}
          error={error}
          type="number"
          max={maxCount}
        />
      </S.PreferencesItem>
      <S.PreferencesItem>
        <Typography.Subtitle fontSize="lg" weight="semiBold" color={theme.colors.gray[600]}>
          Preferences :
        </Typography.Subtitle>
        <UserPreferences />
      </S.PreferencesItem>
      <S.PreferencesItem>
        <Typography.Subtitle fontSize="lg" weight="semiBold" color={theme.colors.gray[600]}>
          Ingredients list :
        </Typography.Subtitle>
        <div>
          {ingredients.map((ing, index) => {
            return <Pill key={index} label={ing} color="gray" />;
          })}
        </div>
      </S.PreferencesItem>
    </S.PreferencesStepContainer>
  );
};

export default PreferencesStep;
