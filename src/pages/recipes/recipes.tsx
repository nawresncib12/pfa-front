import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/atoms/Input/Input";
import { useState } from "react";
import AutoComplete from "../../components/molecules/AutoComplete/AutoComplete";
import Button from "../../components/atoms/Button/Button";

const Recipes = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
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
    <div>
      <AutoComplete
        onChange={onChange}
        maxVisibleItems={3}
        suggestions={["tomato", "potato", "beans", "pies", "milk"]}
        onChoose={onChoose}
        icon={faSearch}
        placeholder="Add ingredients"
      />

      <Button
        onClick={() => {
          onChoose(value);
        }}
      >
        Add
      </Button>
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
      {ingredients.map((o) => (
        <p>{o}</p>
      ))}
    </div>
  );
};

export default Recipes;
