import React, { useState } from 'react';
import * as S from "./Catalog.style";
import FiltersMenu from "../../molecules/filtersMenu/FiltersMenu";
import RecipesSearchBar from "../../molecules/recipiesSearchBar/RecipesSearchBar";
import RecipesGrid from "../../molecules/recipesGrid/RecipesGrid";

const Catalog = () => {

  let recipies = [{
    id:1,
    name: 'jilbena',
    description: 'hethi jiblena bnina',
    image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
    ingedients: ['https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg','https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg','https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg','https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg','https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg','https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'],
    Time: '30min',
    calories: '445'
  },{
    id:2,
    name: 'jilbena',
    description: 'hethi jiblena bnina',
    image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
    ingedients: ['https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg','https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg','https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg','https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg','https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg','https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'],
    Time: '30min',
    calories: '445'
  },{
    id:2,
    name: 'jilbena',
    description: 'hethi jiblena bnina',
    image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
    ingedients: ['https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg','https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg','https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg','https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg','https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg','https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'],
    Time: '30min',
    calories: '445'
  },
];

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
        <RecipesGrid recipiesList={recipies}/>
    </S.CatalogContainer>

  );
};

export default Catalog;
