import React, { useState } from "react";
import * as S from "./Catalog.style";
import FiltersMenu from "../../molecules/filtersMenu/FiltersMenu";
import AutoComplete from "../../molecules/AutoComplete/AutoComplete";
import RecipesSearchBar from "../../molecules/recipiesSearchBar/RecipesSearchBar";
import RecipesGrid from "../../molecules/recipesGrid/RecipesGrid";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Catalog = () => {
  const recipesList = [
    {
      id: 1,
      name: "jilbena",
      description: "hethi jiblena bnina",
      image:
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
      ingedients: [
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
      ],
      Time: "30min",
      calories: "445",
    },
    {
      id: 2,
      name: "ma9arouna",
      description: "hethi jiblena bnina",
      image:
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
      ingedients: [
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
      ],
      Time: "30min",
      calories: "445",
    },
    {
      id: 3,
      name: "patata",
      description: "hethi jiblena bnina",
      image:
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
      ingedients: [
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
      ],
      Time: "30min",
      calories: "445",
    },
  ];
  const [recipies, setRecipies] = useState(recipesList);
  const [filterList, setList] = useState([
    { fitlerGroup: "by Season", elements: ["winter", "summer", "spring"] },
    { fitlerGroup: "by Dish", elements: ["winter", "summer", "spring"] },
  ]);
  const onChange = (input: string) => {
    let newRecipes = recipesList;
    if (input.trim()) {
      newRecipes = recipesList.filter((el) => el.name.includes(input));
    }
    setRecipies(newRecipes);
  };

  return (
    <S.CatalogContainer>
      <FiltersMenu />
      <AutoComplete
        icon={faSearch}
        inputStyle={{ borderRadius: "8px 0 0 8px" }}
        placeholder="Search recipes by name..."
        suggestions={recipies.map((el) => el.name)}
        onChange={onChange}
      />
      <RecipesGrid recipiesList={recipies} />
    </S.CatalogContainer>
  );
};

export default Catalog;
