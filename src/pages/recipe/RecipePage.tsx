import { mockRecipe } from "./mock";
import { Recipe } from "./types";


const RecipePage = ({ recipe = mockRecipe }: { recipe?: Recipe }) => {
  
  return (
    <div>
      <h1>{recipe.label}</h1>
      <p>{recipe.totalTime} m</p>
    </div>
  );
};

export default RecipePage;
