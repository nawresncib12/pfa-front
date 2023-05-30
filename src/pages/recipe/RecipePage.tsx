import { useEffect, useMemo, useState } from "react";
import Pill from "../../components/atoms/Pill/Pill";
import { capitalizeFirstLetter } from "../../utils";
import * as S from "./RecipePage.styles";
import { faHeart as rHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEarth,
  faFire,
  faHeart,
  faCheck,
  faCheckDouble
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import useApi, { RecipeResponse } from "../../api/useApi";
import { useAuth } from "../../auth/AuthContext";

const RecipePage = () => {
  const { getRecipe, likeRecipe, unlikeRecipe, saveRecipe, unsaveRecipe } = useApi();
  const { id } = useParams();
  const { user } = useAuth();

  const [recipeData, setRecipeData] = useState<RecipeResponse | null>(null);

  const isLiked = useMemo(() => {
    if (!user) return false;
    return user.likedRecipes?.find((r) => r.id === id) !== undefined;
  }, [user, id]);

  const isSaved = useMemo(() => {
    if (!user) return false;
    return user.recipes?.find((r) => r.id === id) !== undefined;
  }, [user, id]);

  const fetchRecipe = async () => {
    if (!id) return;

    const res = await getRecipe(id);
    setRecipeData(res);
  };
  useEffect(() => {
    fetchRecipe();
  }, [id]);

  const handleSaveClick = async () => {
    if (!user || !id) return;
    if (isSaved) {
      await unsaveRecipe(id);
    } else {
      await saveRecipe(id);
    }
  };

  const handleHeartClick = async () => {
    if (!user || !id) return;
    if (isLiked) {
      await unlikeRecipe(id);
    } else {
      await likeRecipe(id);
    }
  };

  if (recipeData === null) return null;

  const recipe = recipeData.recipe;

  return (
    <S.RecipePageContainer>
      <S.RecipeImageContainer>
        <S.RecipeImage
          src={recipe.images?.LARGE?.url ?? recipe.images?.REGULAR?.url ?? recipe.image}
        />
        <S.HeartButton onClick={handleHeartClick}>
          <FontAwesomeIcon
            size="xl"
            color="#F984B5"
            icon={isLiked ? faHeart : rHeart}
          ></FontAwesomeIcon>
        </S.HeartButton>
        <S.SaveButton onClick={handleSaveClick}>
          <FontAwesomeIcon
            size="xl"
            color="#10803C"
            icon={isSaved ? faCheckDouble : faCheck}
          ></FontAwesomeIcon>
        </S.SaveButton>
      </S.RecipeImageContainer>
      <div>
        <S.RecipeTitle>{recipe.label}</S.RecipeTitle>
        <S.PillsContainer>
          {recipe.cautions.map((caution) => (
            <Pill key={caution} label={caution} color={"yellow"} />
          ))}
          {recipe.cuisineType.map((cuisine) => (
            <Pill key={cuisine} label={capitalizeFirstLetter(cuisine)} color={"purple"} />
          ))}
          {recipe.dishType.map((dish) => (
            <Pill key={dish} label={capitalizeFirstLetter(dish)} color={"purple"} />
          ))}
          {recipe.dietLabels.map((diet) => (
            <Pill key={diet} label={capitalizeFirstLetter(diet)} color={"purple"} />
          ))}
        </S.PillsContainer>
        <S.RecipeInfo>
          <S.RecipeInfoItem>
            <FontAwesomeIcon color="#8496F9" icon={faClock} /> {recipe.totalTime} min
          </S.RecipeInfoItem>
          <S.RecipeInfoItem>
            <FontAwesomeIcon color="#F984B5" icon={faHeart}></FontAwesomeIcon> {recipe.likes}{" "}
          </S.RecipeInfoItem>
          <S.RecipeInfoItem>
            <FontAwesomeIcon color="#FFB545" icon={faFire} /> {recipe.calories.toFixed(0)} kcal
          </S.RecipeInfoItem>
          <S.RecipeInfoItem>
            <FontAwesomeIcon color="#DBB0EF" icon={faEarth} /> {recipe.totalCO2Emissions.toFixed(0)}{" "}
            CO2
          </S.RecipeInfoItem>
        </S.RecipeInfo>
        <S.RecipeSubtitle>{recipe.ingredientLines.length} ingredients</S.RecipeSubtitle>
        <S.RecipeIngredientsContainer>
          {recipe.ingredients.map((ingredient) => (
            <S.RecipeIngredient key={ingredient.foodId}>
              <S.RecipeIngredientImage src={ingredient.image} />
              <S.RecipeIngredientText>
                {capitalizeFirstLetter(ingredient.food)}
              </S.RecipeIngredientText>
              {ingredient.weight > 0 && (
                <S.RecipeIngredientQuantity>
                  {ingredient.weight.toFixed(0)} {ingredient.measure}
                  {ingredient.weight > 1 && ingredient.measure ? "s" : ""}
                </S.RecipeIngredientQuantity>
              )}
            </S.RecipeIngredient>
          ))}
        </S.RecipeIngredientsContainer>
        <S.RecipeTagTitle color="#17B958">Health Labels</S.RecipeTagTitle>
        <S.PillsContainer>
          {recipe.healthLabels.map((health) => (
            <Pill key={health} label={capitalizeFirstLetter(health)} color={"green"} />
          ))}
        </S.PillsContainer>
      </div>
    </S.RecipePageContainer>
  );
};

export default RecipePage;
