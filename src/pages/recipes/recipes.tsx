import { useMemo, useState } from "react";
import * as S from "./recipes.style";
import IngredientStep from "../../components/organisms/RecipeLoader/IngredientsStep/IngredientStep";
import ProgressBar from "../../components/atoms/ProgressBar/ProgressBar";
import Button from "../../components/atoms/Button/Button";
import { AnimatePresence, motion } from "framer-motion";
import ImageUploadStep from "../../components/organisms/RecipeLoader/ImageUploadStep/ImageUploadStep";

const Recipes = () => {
  const steps = ["Upload image", "Edit ingredients", "Add options"];
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [step, setStep] = useState(0);
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
      <ProgressBar steps={steps} currentStep={step} />
      <S.StepContainer>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {step == 0 && <ImageUploadStep />}
            {step == 1 && (
              <IngredientStep
                ingredients={ingredients}
                setIngredients={setIngredients}
              />
            )}
            {step == 2 && <ImageUploadStep />}
          </motion.div>
        </AnimatePresence>
      </S.StepContainer>
      <S.ButtonsContainer>
        <Button variant="secondary" disabled={step <= 0} onClick={back}>
          Back
        </Button>
        {step === steps.length - 1 ? (
          <Button onClick={() => {}}>Submit</Button>
        ) : (
          <Button disabled={step >= steps.length - 1} onClick={next}>
            Next
          </Button>
        )}
      </S.ButtonsContainer>
    </S.RecipesContainer>
  );
};

export default Recipes;
