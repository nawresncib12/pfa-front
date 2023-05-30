import { useState } from "react";
import * as S from "./recipes.style";
import IngredientStep from "../../components/organisms/RecipeLoader/IngredientsStep/IngredientStep";
import ProgressBar from "../../components/atoms/ProgressBar/ProgressBar";
import Button from "../../components/atoms/Button/Button";
import { AnimatePresence, motion } from "framer-motion";
import ImageUploadStep from "../../components/organisms/RecipeLoader/ImageUploadStep/ImageUploadStep";
import PreferencesStep from "../../components/organisms/RecipeLoader/PreferencesStep/PreferencesStep";

const Recipes = () => {
  const steps = ["Upload image", "Edit ingredients", "Add options"];
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredientCount, setIngredientCount] = useState(ingredients.length);
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");

  const next = () => {
    if (step < steps.length - 1) {
      setStep((step) => step + 1);
    }
  };
  const back = () => {
    if (step > 0) {
      setStep((step) => step - 1);
    }
  };

  return (
    <S.RecipesContainer>
      ooooooooooo
      <ProgressBar steps={steps} currentStep={step} />
      <S.StepContainer>
        <AnimatePresence mode="wait">
          <motion.div
            style={{ height: "100%" }}
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {step == 0 && <ImageUploadStep />}
            {step == 1 && (
              <IngredientStep ingredients={ingredients} setIngredients={setIngredients} />
            )}
            {step == 2 && (
              <PreferencesStep
                setError={setError}
                error={error}
                maxCount={ingredients.length}
                ingredientCount={ingredientCount}
                setIngredientCount={setIngredientCount}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </S.StepContainer>
      <S.ButtonsContainer>
        <Button variant="secondary" disabled={step <= 0} onClick={back}>
          Back
        </Button>
        {step === steps.length - 1 ? (
          <Button
            disabled={ingredients.length === 0}
            onClick={() => {
              console.log("test");
            }}
          >
            Submit
          </Button>
        ) : (
          <Button disabled={!!error.length || step >= steps.length - 1} onClick={next}>
            Next
          </Button>
        )}
      </S.ButtonsContainer>
    </S.RecipesContainer>
  );
};

export default Recipes;
