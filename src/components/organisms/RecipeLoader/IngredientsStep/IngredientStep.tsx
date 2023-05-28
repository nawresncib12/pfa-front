import { Dispatch, SetStateAction } from "react";
import * as S from "./IngredientStep.style";
import RecipeSearchBar from "../../RecipeSearch/RecipeSearchBar/RecipeSearchBar";
import IngredientCard from "../../../atoms/IngredientCard/IngredientCard";
import recipeBook from "../../../../assets/images/recipesBook.svg";
import Typography from "../../../atoms/Typography/Typography.styles";
import { AnimatePresence, motion } from "framer-motion";

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
        <AnimatePresence>
          {!!ingredients.length ? (
            ingredients.map((ingredient) => (
              <motion.div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
                key={ingredient}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <IngredientCard
                  ingredient={ingredient}
                  removeIngredient={removeIngredient}
                />
              </motion.div>
            ))
          ) : (
            <S.NoIngredientAlert
              key="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Typography.Base fontSize="xl">
                No ingredients chosen yet
              </Typography.Base>
              <S.NoIngredientImage src={recipeBook} />
            </S.NoIngredientAlert>
          )}
        </AnimatePresence>
      </S.IngredientList>
    </S.IngredientStepContainer>
  );
};

export default IngredientStep;
