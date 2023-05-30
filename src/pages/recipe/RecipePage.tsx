import { useState } from "react";
import Pill from "../../components/atoms/Pill/Pill";
import { capitalizeFirstLetter } from "../../utils";
import { mockRecipe } from "./mock";
import { Recipe } from "./types";
import * as S from "./RecipePage.styles";
import { faHeart as rHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEarth, faFire, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/atoms/Button/Button.styles";

const RecipePage = ({ recipe = mockRecipe }: { recipe?: Recipe }) => {
  const [isLiked, toggleLike] = useState(recipe.isLikedByMe);
  return (
    <S.RecipePageContainer>
      <S.RecipeImageContainer>
        <S.RecipeImage
          src={recipe.images.LARGE?.url ?? recipe.images.REGULAR?.url ?? recipe.image}
        />

        <S.HeartButton
          onClick={() => {
            toggleLike(!isLiked);
            console.log(isLiked);
          }}>
          <FontAwesomeIcon
            size="xl"
            color="#F984B5"
            icon={isLiked ? rHeart : faHeart}></FontAwesomeIcon>
        </S.HeartButton>
      </S.RecipeImageContainer>
      <div>
        <S.RecipeTitle>{recipe.label}</S.RecipeTitle>
        <S.PillsContainer>
          {recipe.cautions.map((caution) => (
            <Pill key="" label={caution} color={"yellow"} />
          ))}
          {recipe.cuisineType.map((cuisine) => (
            <Pill key="" label={capitalizeFirstLetter(cuisine)} color={"purple"} />
          ))}
          {recipe.dishType.map((dish) => (
            <Pill key="" label={capitalizeFirstLetter(dish)} color={"purple"} />
          ))}
          {recipe.dietLabels.map((diet) => (
            <Pill key="" label={capitalizeFirstLetter(diet)} color={"purple"} />
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
            <S.RecipeIngredient key="">
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
            <Pill key="" label={capitalizeFirstLetter(health)} color={"green"} />
          ))}
        </S.PillsContainer>
      </div>
    </S.RecipePageContainer>
  );
};

export default RecipePage;
