import Card from "../../atoms/card/Card";
import * as S from "./RecipesGrid.styles";

const RecipesGrid = ({ recipiesList, filters }: any) => {
  const manageRecipiesList = () => {
    /*recipiesList.filter(el =>
      filters[0].elements.includes(el.Season) && )*/
    recipiesList = recipiesList.sort(
      (a: any, b: any) => a[filters[2].elements] - b[filters[2].elements]
    );
  };
  manageRecipiesList();
  return (
    <S.RecipesGridContainer>
      {recipiesList.map((el: any, index: number) => {
        return <Card key={index} recipie={el}></Card>;
      })}
    </S.RecipesGridContainer>
  );
};

export default RecipesGrid;
