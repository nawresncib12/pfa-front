import { Dispatch, SetStateAction } from "react";
import * as S from "./PreferencesStep.style";
import Input from "../../../atoms/Input/Input";
import Typography from "../../../atoms/Typography/Typography.styles";

type PreferencesStepProps = {
  maxCount: number;
  ingredientCount: number;
  setIngredientCount: Dispatch<SetStateAction<number>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
};

const PreferencesStep = ({
  maxCount,
  error,
  setError,
  ingredientCount,
  setIngredientCount,
}: PreferencesStepProps) => {
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
      <Typography.Base fontSize="xl" weight="normal">
        How many ingredients do you want us to use from the ones you provided?
      </Typography.Base>
      <Input
        value={ingredientCount}
        onChange={onChange}
        error={error}
        type="number"
        max={maxCount}
      />
    </S.PreferencesStepContainer>
  );
};

export default PreferencesStep;
