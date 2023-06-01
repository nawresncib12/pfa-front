import { useState, useMemo, useEffect } from "react";
import * as S from "./Catalog.style";
import FiltersMenu, { FilterFields, FilterGroups } from "../../molecules/filtersMenu/FiltersMenu";
import AutoComplete from "../../molecules/AutoComplete/AutoComplete";
import RecipesGrid from "../../molecules/recipesGrid/RecipesGrid";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { mockRecipe } from "../../../pages/recipe/mock";
function filterMap(e: string) {
  return { value: e, checked: true };
}
const searchResults = Array.from({ length: 10 }).map(() => ({
  ...mockRecipe,
  id: "" + Math.random(),
  totalTime: Math.floor(Math.random() * 100)
}));

const sortByOptions = ["totalTime", "calories", "likes"] as const;
type SortByOptions = (typeof sortByOptions)[number];

const Catalog = () => {
  // const { searchResults } = useSearch();
  const [filteredRecipes, setFilteredRecipes] = useState(searchResults);

  const filterGroups: FilterGroups = useMemo(() => {
    const cuisines = Array.from(new Set(searchResults.map((el) => el.cuisineType).flat()));
    const diets = Array.from(new Set(searchResults.map((el) => el.dietLabels).flat()));
    const mealTypes = Array.from(new Set(searchResults.map((el) => el.mealType).flat()));
    const dishTypes = Array.from(new Set(searchResults.map((el) => el.dishType).flat()));
    return {
      cuisineType: cuisines.map(filterMap),
      dietLabels: diets.map(filterMap),
      mealType: mealTypes.map(filterMap),
      dishType: dishTypes.map(filterMap)
    };
  }, [searchResults]);

  const [filters, setFilters] = useState<FilterGroups>(filterGroups);

  const onChange = (input: string) => {
    setFilteredRecipes(
      searchResults.filter((el) => el.label.toLowerCase().includes(input.toLowerCase()))
    );
  };
  const labels = useMemo(
    () => Array.from(new Set(searchResults.map((el) => el.label))),
    [searchResults]
  );

  const toggleFilter = (filterGroup: FilterFields, value: string) => {
    console.log(`Toggle filter: ${filterGroup} - ${value}`);
    setFilters((prev) => {
      const newFilters = { ...prev };
      const filter = newFilters[filterGroup].find((el) => el.value === value);
      if (filter) {
        filter.checked = !filter.checked;
      }
      return newFilters;
    });
  };

  useEffect(() => {
    const filtered = searchResults.filter((el) => {
      const cuisineType = filters.cuisineType.find((filter) =>
        el.cuisineType.includes(filter.value)
      );
      const dietLabels = filters.dietLabels.find((filter) => el.dietLabels.includes(filter.value));
      const mealType = filters.mealType.find((filter) => el.mealType.includes(filter.value));
      const dishType = filters.dishType.find((filter) => el.dishType.includes(filter.value));

      return (
        (cuisineType?.checked || !cuisineType) &&
        (dietLabels?.checked || !dietLabels) &&
        (mealType?.checked || !mealType) &&
        (dishType?.checked || !dishType)
      );
    });
    setFilteredRecipes(filtered);
  }, [filters, searchResults]);

  const [sortByOption, setSortByOption] = useState<SortByOptions>("totalTime");

  const sortBy = (option: SortByOptions) => {
    console.log(`Sort by: ${option}`);
    setSortByOption(option);
    setFilteredRecipes((prev) =>
      prev.sort((a, b) => {
        if (a[option] < b[option]) {
          return -1;
        }
        if (a[option] > b[option]) {
          return 1;
        }
        return 0;
      })
    );
  };

  return (
    <S.CatalogContainer>
      <FiltersMenu
        filterGroups={filters}
        toggleFilter={toggleFilter}
        sortByOptions={sortByOptions as unknown as string[]}
        sortBy={sortBy as (option: string) => void}
        sortByOption={sortByOption}
      />
      <AutoComplete
        icon={faSearch}
        inputStyle={{ borderRadius: "8px 0 0 8px" }}
        placeholder="Search recipes by name..."
        suggestions={labels}
        onChange={onChange}
      />
      <RecipesGrid recipeList={filteredRecipes} />
    </S.CatalogContainer>
  );
};

export default Catalog;
