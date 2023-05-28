import { Dispatch, SetStateAction } from "react";
import * as S from "./PreferencesStep.style";
import Input from "../../../atoms/Input/Input";

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
    <div>
      <Input onChange={onChange} error={error} type="number" max={maxCount} />
    </div>
  );
};

export default PreferencesStep;
