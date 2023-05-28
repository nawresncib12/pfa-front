import Pill from "../../components/atoms/Pill/Pill";
import { capitalizeFirstLetter } from "../../utils";
import { mockRecipe } from "./mock";
import { Recipe } from "./types";
import * as S from "./RecipePage.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEarth, faFire } from "@fortawesome/free-solid-svg-icons";

const RecipePage = ({ recipe = mockRecipe }: { recipe?: Recipe }) => {

  return (
      <S.RecipePageContainer>
        <S.RecipeImageContainer>
          <S.RecipeImage src={recipe.images.LARGE?.url ?? recipe.images.REGULAR?.url ?? recipe.image} />
        </S.RecipeImageContainer>
        <div>
          <S.RecipeTitle>{recipe.label}</S.RecipeTitle>
          <S.PillsContainer>
            {recipe.cautions.map((caution) => (
                  <Pill label={caution} color={"yellow"} />
                  ))}
            {recipe.cuisineType.map((cuisine) => (
                  <Pill label={capitalizeFirstLetter(cuisine)} color={"purple"} />
                  ))}
            {recipe.dishType.map((dish) => (
                  <Pill label={capitalizeFirstLetter(dish)} color={"purple"} />
                  ))}
            {recipe.dietLabels.map((diet) => (
                  <Pill label={capitalizeFirstLetter(diet)} color={"purple"} />
                  ))}
          </S.PillsContainer>
          <S.RecipeInfo>
            <S.RecipeInfoItem><FontAwesomeIcon color="#8496F9" icon={faClock}/> {recipe.totalTime} min</S.RecipeInfoItem>
            <S.RecipeInfoItem><FontAwesomeIcon color="#FFB545" icon={faFire}/> {recipe.calories.toFixed(0)} kcal</S.RecipeInfoItem>
            <S.RecipeInfoItem><FontAwesomeIcon color="#DBB0EF" icon={faEarth}/> {recipe.totalCO2Emissions.toFixed(0)} CO2</S.RecipeInfoItem>
          </S.RecipeInfo>
          <S.RecipeSubtitle>
            {recipe.ingredientLines.length} ingredients 
          </S.RecipeSubtitle>
          <S.RecipeIngredientsContainer>
            {recipe.ingredients.map((ingredient) => (
                  <S.RecipeIngredient>
                  <S.RecipeIngredientImage src={ingredient.image} />
                  <S.RecipeIngredientText>{capitalizeFirstLetter(ingredient.food)}</S.RecipeIngredientText>
                  {ingredient.weight > 0 && <S.RecipeIngredientQuantity>{ingredient.weight.toFixed(0)} {ingredient.measure}{ingredient.weight > 1 && ingredient.measure ? "s" : ""}</S.RecipeIngredientQuantity>}
                  </S.RecipeIngredient>
                  ))}
          </S.RecipeIngredientsContainer>
            <S.RecipeTagTitle color="#17B958">Health Labels</S.RecipeTagTitle>
            <S.PillsContainer>
            {recipe.healthLabels.map((health) => (
                  <Pill label={capitalizeFirstLetter(health)} color={"green"} />
                  ))}
          </S.PillsContainer>
        </div>
      </S.RecipePageContainer>
      );
};

export default RecipePage;
