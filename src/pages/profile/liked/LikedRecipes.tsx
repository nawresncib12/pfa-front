import { useNavigate } from "react-router-dom";
import Pill from "../../../components/atoms/Pill/Pill";
import { mockUser } from "../Profile";
import * as S from "./LikedRecipes.styles";

const LikedRecipes = () => {
  const user = mockUser;
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    console.log(id);
    navigate(`/recipe/${id}`);
  };
  return (
    <div>
      <S.LikedRecipesTitle>Liked Recipes</S.LikedRecipesTitle>
      <S.RecipeCardsContainer>
        {user.savedRecipes?.map((recipe) => (
          <S.RecipeCard key={recipe.id}>
            <S.RecipeCardHeader>
              <S.RecipeCardTitle onClick={() => handleClick(recipe.id)}>
                {recipe.label}
              </S.RecipeCardTitle>
            </S.RecipeCardHeader>
            <S.RecipePillsContainer>
              {recipe.dishType.map((dish) => (
                <Pill color="purple" label={dish} key={dish} />
              ))}
              {recipe.mealType.map((meal) => (
                <Pill color="purple" label={meal} key={meal} />
              ))}
              {recipe.dietLabels.map((diet) => (
                <Pill color="purple" label={diet} key={diet} />
              ))}
            </S.RecipePillsContainer>
          </S.RecipeCard>
        ))}
      </S.RecipeCardsContainer>
    </div>
  );
};

export default LikedRecipes;
