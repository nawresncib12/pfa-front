import { useState } from "react";
import * as S from "./recipes.style";
import IngredientStep from "../../components/organisms/RecipeLoader/IngredientsStep/IngredientStep";

const Recipes = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  return (
    <S.RecipesContainer>
      <IngredientStep
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
    </S.RecipesContainer>
  );
};

export default Recipes;
