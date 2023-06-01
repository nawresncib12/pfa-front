import { Recipe } from "../../../pages/recipe/types";
import Card from "../../atoms/card/Card";
import * as S from "./RecipesGrid.styles";

type RecipesGridProps = {
  recipeList: Recipe[];
};
const RecipesGrid = ({ recipeList }: RecipesGridProps) => {
  return (
    <S.RecipesGridContainer>
      {recipeList.map((el) => {
        return <Card key={el.id} recipe={el}></Card>;
      })}
    </S.RecipesGridContainer>
  );
};

export default RecipesGrid;
