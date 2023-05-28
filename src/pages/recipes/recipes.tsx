import { useState } from "react";
import * as S from "./recipes.style";
import IngredientStep from "../../components/organisms/RecipeLoader/IngredientsStep/IngredientStep";
import ProgressBar from "../../components/atoms/ProgressBar/ProgressBar";

const Recipes = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  return (
    <S.RecipesContainer>
      <ProgressBar value={60} />
      <IngredientStep
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
    </S.RecipesContainer>
  );
};

export default Recipes;
