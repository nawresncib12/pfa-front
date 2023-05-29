import React, { useState } from "react";
import * as S from "./Catalog.style";
import FiltersMenu from "../../molecules/filtersMenu/FiltersMenu";
import AutoComplete from "../../molecules/AutoComplete/AutoComplete";
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
      time: "1",
      calories: "44",
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
      time: "2",
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
      time: "4",
      calories: "4",
    },
  ];
  const [recipies, setRecipies] = useState(recipesList);
  const filterList = [
    { fitlerGroup: "Season", elements: ["winter", "summer", "spring"] },
    { fitlerGroup: "Dish", elements: ["cold", "hot", "average"] },
    { fitlerGroup: "Sort By", elements: ["time", "calories"] },
  ];
  const [filters, setFilters] = useState([
    { fitlerGroup: "Season", elements: ["winter", "summer", "spring"] },
    { fitlerGroup: "Dish", elements: ["cold", "hot", "average"] },
    { fitlerGroup: "Sort By", elements: "time" },
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
      <FiltersMenu filterList={filterList} filters={[filters, setFilters]} />
      <AutoComplete
        icon={faSearch}
        inputStyle={{ borderRadius: "8px 0 0 8px" }}
        placeholder="Search recipes by name..."
        suggestions={recipies.map((el) => el.name)}
        onChange={onChange}
      />
      <RecipesGrid recipiesList={recipies} filters={filters} />
    </S.CatalogContainer>
  );
};

export default Catalog;
