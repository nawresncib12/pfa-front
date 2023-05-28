import Pill from "../../components/atoms/Pill/Pill";
import { capitalizeFirstLetter } from "../../utils";
import { mockRecipe } from "./mock";
import { Recipe } from "./types";
import * as S from "./RecipePage.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEarth, faFire } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "styled-components";

const RecipePage = ({ recipe = mockRecipe }: { recipe?: Recipe }) => {
  const theme = useTheme();
  return (
    <div>
      <S.RecipeImage src={recipe.image} />
      <S.RecipeTitle>{recipe.label}</S.RecipeTitle>
      <S.PillsContainer>
        {recipe.cautions.map((caution) => (
          <Pill label={caution} color={"yellow"} />
        ))}
        {recipe.cuisineType.map((cuisine) => (
          <Pill label={capitalizeFirstLetter(cuisine)} color={"purple"} />
        ))}
      </S.PillsContainer>
      <S.RecipeInfo>
        <S.RecipeInfoItem><FontAwesomeIcon color="#8496F9" icon={faClock}/> {recipe.totalTime} min</S.RecipeInfoItem>
        <S.RecipeInfoItem><FontAwesomeIcon color="#FFB545" icon={faFire}/> {recipe.calories.toFixed(0)} kcal</S.RecipeInfoItem>
        <S.RecipeInfoItem><FontAwesomeIcon color="#DBB0EF" icon={faEarth}/> {recipe.totalCO2Emissions.toFixed(0)} CO2</S.RecipeInfoItem>
      </S.RecipeInfo>
    </div>
  );
};

export default RecipePage;
