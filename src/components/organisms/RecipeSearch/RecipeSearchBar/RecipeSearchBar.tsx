import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, useState } from "react";
import AutoComplete from "../../../molecules/AutoComplete/AutoComplete";
import Button from "../../../atoms/Button/Button";
import * as S from "./RecipeSearchBar.style";

const MOCK_INGREDIENTS = [
  "apples",
  "avocado",
  "banana",
  "beans",
  "broccoli",
  "carrots",
  "celery",
  "cheese",
  "chicken",
  "chili",
  "cucumber",
  "eggs",
  "garlic",
  "ginger",
  "grapes",
  "honey",
  "kale",
  "lemon",
  "lettuce",
  "mango",
  "milk",
  "mushrooms",
  "olives",
  "onions",
  "orange",
  "peanuts",
  "pepper",
  "pineapple",
  "potato",
  "quinoa",
  "rice",
  "salt",
  "spinach",
  "strawberries",
  "sugar",
  "tomato",
  "tuna",
  "turkey",
  "vinegar",
  "walnuts",
  "watermelon",
  "yogurt",
  "zucchini",
  "beef",
  "corn",
  "dates",
  "feta",
  "kiwi",
  "papaya"
];

type RecipeSearchBarProps = {
  ingredients: string[];
  setIngredients: Dispatch<SetStateAction<string[]>>;
};

const RecipeSearchBar = ({ ingredients, setIngredients }: RecipeSearchBarProps) => {
  const [value, setValue] = useState("");

  const onChoose = (input: string) => {
    if (ingredients.includes(input)) {
      return;
    }
    const newIngredients = [...ingredients, input];
    setIngredients(newIngredients);
    setValue("");
  };
  const onChange = (input: string) => {
    setValue(input);
  };

  return (
    <S.RecipeSearchBarContainer>
      <AutoComplete
        onChange={onChange}
        maxVisibleItems={3}
        suggestions={MOCK_INGREDIENTS}
        onChoose={onChoose}
        icon={faSearch}
        placeholder="Add ingredients"
        inputStyle={{ borderRadius: "8px 0 0 8px" }}
      />

      <Button
        onClick={() => {
          onChoose(value);
        }}
        borderRadius="0 8px 8px 0"
      >
        Add
      </Button>
    </S.RecipeSearchBarContainer>
  );
};

export default RecipeSearchBar;
