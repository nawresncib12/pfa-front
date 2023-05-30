import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, useState } from "react";
import AutoComplete from "../../../molecules/AutoComplete/AutoComplete";
import Button from "../../../atoms/Button/Button";
import * as S from "./RecipeSearchBar.style";

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
  };
  const onChange = (input: string) => {
    setValue(input);
  };

  return (
    <S.RecipeSearchBarContainer>
      <AutoComplete
        onChange={onChange}
        maxVisibleItems={3}
        suggestions={["tomato", "potato", "beans", "pies", "milk"]}
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
