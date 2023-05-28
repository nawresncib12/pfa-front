import React, { useState } from 'react';
import * as S from "./Catalog.style";
import FiltersMenu from "../../molecules/filtersMenu/FiltersMenu";
import RecipesSearchBar from "../../molecules/recipiesSearchBar/RecipesSearchBar";
import RecipesGrid from "../../molecules/recipesGrid/RecipesGrid";

const Catalog = () => {
    const [filterList, setList] =useState([
        {fitlerGroup: 'by Season', 
        elements: [
          'winter',
          'summer',
          'spring',
        ]},
        {fitlerGroup: 'by Dish', 
        elements: [
            'winter',
            'summer',
            'spring',
          ]},
      ])
  return (
    <S.CatalogContainer>
        <FiltersMenu/>
        <RecipesSearchBar/>
        <RecipesGrid/>
    </S.CatalogContainer>

  );
};

export default Catalog;
