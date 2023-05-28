import Card from "../../atoms/card/Card";
import * as S from "./RecipesGrid.styles";

const RecipesGrid = ({recipiesList}: any) => {
  return (
    <S.RecipesGridContainer>
      {recipiesList.map((el: any) => {
        return (
      <Card recipie={el}></Card>)
    })}
    </S.RecipesGridContainer>
  );
};

export default RecipesGrid;
