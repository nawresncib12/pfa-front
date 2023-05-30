import { useState } from "react";
import * as S from "./Catalog.style";
import FiltersMenu from "../../molecules/filtersMenu/FiltersMenu";
import AutoComplete from "../../molecules/AutoComplete/AutoComplete";
import RecipesGrid from "../../molecules/recipesGrid/RecipesGrid";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Catalog = () => {
  const recipesList = [
    {
      id: 1,
      name: "salad without lituce",
      description: "quick salad to lose weight",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/salads-without-lettuce-645bd01724d31.jpeg?crop=1.00xw:1.00xh;0,0&resize=360:*",
      ingedients: [
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
      ],
      time: "15",
      calories: "120"
    },
    {
      id: 2,
      name: "caprese pasta",
      description: "delicious pasta (sans gluten)",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/chickpea-recipes-645e582c4abe3.jpeg?crop=1.00xw:1.00xh;0,0&resize=360:*",
      ingedients: [
        "https://hips.hearstapps.com/hmg-prod/images/chickpea-recipes-645e582c4abe3.jpeg?crop=1.00xw:1.00xh;0,0&resize=360:*",
        "https://hips.hearstapps.com/hmg-prod/images/chickpea-recipes-645e582c4abe3.jpeg?crop=1.00xw:1.00xh;0,0&resize=360:*",
        "https://hips.hearstapps.com/hmg-prod/images/chickpea-recipes-645e582c4abe3.jpeg?crop=1.00xw:1.00xh;0,0&resize=360:*"
      ],
      time: "35",
      calories: "445"
    },
    {
      id: 3,
      name: "meat and chease salad",
      description: "balking by eating salads ? yes it is possible",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/4th-of-july-salads-6451572460f16.jpeg?crop=1.00xw:1.00xh;0,0&resize=360:*",
      ingedients: [
        "https://hips.hearstapps.com/hmg-prod/images/chickpea-recipes-645e582c4abe3.jpeg?crop=1.00xw:1.00xh;0,0&resize=360:*",
        "https://hips.hearstapps.com/hmg-prod/images/chickpea-recipes-645e582c4abe3.jpeg?crop=1.00xw:1.00xh;0,0&resize=360:*",
        "https://hips.hearstapps.com/hmg-prod/images/chickpea-recipes-645e582c4abe3.jpeg?crop=1.00xw:1.00xh;0,0&resize=360:*"
      ],
      time: "30",
      calories: "600"
    },
    {
      id: 4,
      name: "cow boy steak",
      description: "for meat lovers",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/cowboy-steak-recipe-2-6446ed45d1ae3.jpg?crop=0.502xw:1.00xh;0.279xw,0&resize=360:*",
      ingedients: [
        "https://hips.hearstapps.com/hmg-prod/images/chickpea-recipes-645e582c4abe3.jpeg?crop=1.00xw:1.00xh;0,0&resize=360:*",
        "https://hips.hearstapps.com/hmg-prod/images/chickpea-recipes-645e582c4abe3.jpeg?crop=1.00xw:1.00xh;0,0&resize=360:*",
        "https://hips.hearstapps.com/hmg-prod/images/chickpea-recipes-645e582c4abe3.jpeg?crop=1.00xw:1.00xh;0,0&resize=360:*"
      ],
      time: "10",
      calories: "800"
    },
    {
      id: 5,
      name: "ultimate Rizz Salad",
      description: "this salad is what we call the Digestable rizz",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/caprese1-6441bd8994ae2.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=360:*",
      ingedients: [
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
      ],
      time: "30",
      calories: "500"
    },
    {
      id: 6,
      name: "chicken nuggets",
      description: "literally chicken turned into nuggest just to make you happy ",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/summer-chicken-recipes-644c200dc03a1.jpeg?crop=0.998xw:1.00xh;0.00160xw,0&resize=360:*",
      ingedients: [
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
      ],
      time: "26",
      calories: "560"
    }
  ];
  const [recipies, setRecipies] = useState(recipesList);
  const filterList = [
    { fitlerGroup: "Season", elements: ["winter", "summer", "spring"] },
    { fitlerGroup: "Dish", elements: ["cold", "hot", "average"] },
    { fitlerGroup: "Sort By", elements: ["time", "calories"] }
  ];
  const [filters, setFilters] = useState([
    { fitlerGroup: "Season", elements: ["winter", "summer", "spring"] },
    { fitlerGroup: "Dish", elements: ["cold", "hot", "average"] },
    { fitlerGroup: "Sort By", elements: "time" }
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
