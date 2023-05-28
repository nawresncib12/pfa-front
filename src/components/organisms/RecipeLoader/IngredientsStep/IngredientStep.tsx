import { Dispatch, SetStateAction } from "react";
import * as S from "./IngredientStep.style";
import RecipeSearchBar from "../../RecipeSearch/RecipeSearchBar/RecipeSearchBar";
import IngredientCard from "../../../atoms/IngredientCard/IngredientCard";

type IngredientStepProps = {
  ingredients: string[];
  setIngredients: Dispatch<SetStateAction<string[]>>;
};

const IngredientStep = ({
  ingredients,
  setIngredients,
}: IngredientStepProps) => {
  const removeIngredient = (value: string) => {
    if (ingredients.includes(value)) {
      const newIngredients = ingredients.filter((ing) => ing !== value);

      setIngredients(newIngredients);
    }
  };

  return (
    <S.IngredientStepContainer>
      <RecipeSearchBar
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      <S.IngredientList>
        {ingredients.map((ingredient) => (
          <IngredientCard
            ingredient={ingredient}
            removeIngredient={removeIngredient}
          />
        ))}
      </S.IngredientList>
    </S.IngredientStepContainer>
  );
};

export default IngredientStep;
