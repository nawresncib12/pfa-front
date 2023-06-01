import { useState } from "react";
import * as S from "./recipes.style";
import IngredientStep from "../../components/organisms/RecipeLoader/IngredientsStep/IngredientStep";
import ProgressBar from "../../components/atoms/ProgressBar/ProgressBar";
import Button from "../../components/atoms/Button/Button";
import { AnimatePresence, motion } from "framer-motion";
import ImageUploadStep from "../../components/organisms/RecipeLoader/ImageUploadStep/ImageUploadStep";
import PreferencesStep from "../../components/organisms/RecipeLoader/PreferencesStep/PreferencesStep";
import { useSearch } from "../../hooks/useSearch";
import useApi from "../../api/useApi";
import { SearchRecipeDto } from "../recipe/types";
import { useNavigate } from "react-router-dom";

const UPLOAD_IMAGE_STEP = 0;
const INGREDIENT_STEP = 1;
const PREFERENCES_STEP = 2;

const Recipes = () => {
  const steps = [
    "Upload an image to extract your ingredients list",
    "Edit your ingredients list",
    "Request summary"
  ];
  const { ingredients, setIngredients, imageFile, search, loading: searchLoading } = useSearch();
  const { detectIngredients } = useApi();
  const navigate = useNavigate();
  const [ingredientCount, setIngredientCount] = useState(ingredients.length);
  const [step, setStep] = useState(UPLOAD_IMAGE_STEP);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadImageNext = async () => {
    if (imageFile) {
      setIsLoading(true);
      try {
        const detectIngredientsResponse = await detectIngredients(imageFile);
        if (detectIngredientsResponse) {
          const ingredientSet = new Set(
            detectIngredientsResponse.ingredients.map((ingredient) => ingredient.name)
          );
          setIngredients(Array.from(ingredientSet));
        }
        setStep((step) => step + 1);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      return;
    }
  };

  const handleIngredientNext = () => {
    setStep((step) => step + 1);
  };

  const handleSubmit = async () => {
    await search();
  };

  const next = () => {
    switch (step) {
      case UPLOAD_IMAGE_STEP:
        handleUploadImageNext();
        break;
      case INGREDIENT_STEP:
        handleIngredientNext();
        break;
      case PREFERENCES_STEP:
        break;
    }
  };
  const back = () => {
    if (step > UPLOAD_IMAGE_STEP) {
      setStep((step) => step - 1);
    }
  };

  return (
    <S.RecipesContainer>
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
            {step == UPLOAD_IMAGE_STEP && <ImageUploadStep />}
            {step == INGREDIENT_STEP && (
              <IngredientStep ingredients={ingredients} setIngredients={setIngredients} />
            )}
            {step == PREFERENCES_STEP && (
              <PreferencesStep
                ingredients={ingredients}
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
            loading={searchLoading}
            disabled={ingredients.length === 0 || !!error || isLoading}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        ) : (
          <Button
            loading={isLoading}
            disabled={!!error.length || step >= steps.length - 1 || isLoading}
            onClick={next}
          >
            Next
          </Button>
        )}
      </S.ButtonsContainer>
    </S.RecipesContainer>
  );
};

export default Recipes;
